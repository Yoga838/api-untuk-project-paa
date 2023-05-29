import prisma from "@/lib/prisma";
import { verify,sign } from "jsonwebtoken";
const JWT_SECRET = 'My-Lover';


export default async function handler(req,res){
    if(req.method === "POST"){
        const {token,tanggal,nik,nama,keterangan}=req.body
        if(!token||!tanggal||!nik||!nama||!keterangan){
            return res.status(200).json({message:"data tidak boleh kosong"})
        }
        const decodetoken = verify(token, JWT_SECRET)
        const id = decodetoken.userId
        

        const get_akun = await prisma.akun.findUnique({where:{id}})
        const makehistory = await prisma.history.create({
            data:{
                nik,
                nama,
                keterangan,
                tanggal,
                pegawai:get_akun.nama,

            }
        })
        // res.send(id)
        return res.status(200).json({message:"berhasil menambah history"})
    }
}