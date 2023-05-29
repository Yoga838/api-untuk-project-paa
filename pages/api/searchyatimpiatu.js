import prisma from "@/lib/prisma";
export default async function handler(req,res){
    if(req.method === "POST"){
        const{nik}=req.body;
        if (!nik){
            return res.status(400).json({message:"data tidak boleh kosong"})
        }
        const getsearch = await prisma.data.findUnique({where:{nik}})
        if(!getsearch){
            return res.status(400).json({message:"data yang anda cari tidak ada"})
        }
        return res.send(getsearch)
    }
}