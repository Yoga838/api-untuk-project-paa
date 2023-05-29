import prisma from "@/lib/prisma";
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import fs from 'fs';
import path from 'path';

export default async function handler(req,res){
    if(req.method === "POST"){
        const {nik} = req.body;
        if(!nik){
            return res.status(200).json({message:"data harus ada"})
        }
        const data = await prisma.data.findUnique({where:{nik}})

        const template = fs.readFileSync(path.resolve('public','template.docx'), 'binary');

        const zip = new PizZip(template)
        // Inisialisasi Docxtemplater
        const doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
        });
        // Ganti kolom kosong dengan data dari JSON
        doc.render({
            "Kabupaten":"Bondowoso",
            "Kecamatan":"Wringin",
            "Desa":"Jatitamban",
            "Alamat":"Jatitamban Rt.13 Rw.04"
        });
        // Simpan dokumen yang dihasilkan
        const buffer = doc.getZip().generate({
            type: "nodebuffer",
            // compression: DEFLATE adds a compression step.
            // For a 50MB output document, expect 500ms additional CPU time
            compression: "DEFLATE",
        });
        res.setHeader('Content-Disposition', 'attachment; filename=output.docx');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
        res.send(buffer);
    }
}