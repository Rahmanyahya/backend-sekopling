import { entityData } from "../../config";
import prisma from "../../DATABASE/db";

const creatEntity = async (data: entityData) => {
    return await prisma.siswa.create({data: {nama: data.nama, absen: data.absen,email: data.email,jabatan: data.jabatan,no_telp: data.no_telp,password: data.password, photo:"https://tse4.mm.bing.net/th?id=OIP.ELnJq_JhiyfewhCMKOkNfwHaHa&pid=Api&P=0&h=180"}})
}

const updateEntity = async (data: entityData, id: number) => {
    return await prisma.siswa.update({where: {id},data: {nama: data.nama, absen: data.absen,email: data.email,jabatan: data.jabatan,no_telp: data.no_telp,password: data.password, photo:"https://tse4.mm.bing.net/th?id=OIP.ELnJq_JhiyfewhCMKOkNfwHaHa&pid=Api&P=0&h=180"}})
}

const deleteEntity = async (id: number) => {
    return await prisma.siswa.delete({where: {id}})
}

export {creatEntity,deleteEntity,updateEntity}