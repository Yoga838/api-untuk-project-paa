import prisma from "@/lib/prisma";
export default async function handler(req,res){
    if(req.method === "GET"){
        const getdata = await prisma.data.findMany({})
        return res.send(getdata)
    }
}