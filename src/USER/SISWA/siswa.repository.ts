import { profile } from "console";
import { updateProfileData } from "../../config";
import prisma from "../../DATABASE/db";

const getTugas = async () => {
    const data = await prisma.tugas.findMany({include: {guru: {select: {nama: true,mapel: true}}}})
    return data.length > 0 ? data : null  
}

const getKas = async (siswaID: number) => {
   const data = await prisma.transaksi_kas.findMany({where: {siswaID}, include: {siswa: {select: {nama: true}}}}) 
   return data.length > 0 ? data : null
}

const getEvent = async () => {
   const data = await prisma.event.findMany() 
   return data.length > 0 ? data : null
}

const getMapel = async () => {
   const data = await prisma.jadwal.findMany({include: {guru: {select: {nama: true,mapel: true}}}}) 
   return data.length > 0 ? data : null
}

const updateProfile  = async (newData: updateProfileData) => {
   const data = await prisma.siswa.update({where: {id: newData.id}, data: {photo: newData.photo == null ? "https://tse4.mm.bing.net/th?id=OIP.ELnJq_JhiyfewhCMKOkNfwHaHa&pid=Api&P=0&h=180" : newData.photo, email: newData.email, no_telp: newData.no_telp}})
   return ({id: data.id, email: data.email, no_telp: data.no_telp, photo_profile: data.photo})
}

const getSiswaById = async (siswaID: number) => {
   return await prisma.siswa.findFirst({where: {id: siswaID}})
}

const getProfileSiswa = async (id: number) => {
   const dataUser = await prisma.siswa.findFirst({where: {id}}) 
   const profile = {
    photo: dataUser?.photo
    || "https://tse4.mm.bing.net/th?id=OIP.ELnJq_JhiyfewhCMKOkNfwHaHa&pid=Api&P=0&h=180",
    email: dataUser?.email,
    no_telp: dataUser?.no_telp
   }

   return dataUser == null ? null : profile
}

const getPengumuman = async () => {
   const data = await prisma.pengumuman.findMany()
   return data.length > 0 ? (data.map(item => ({description: item.deskripsi}))) : null
}

export {getTugas, getKas, getEvent,updateProfile, getMapel, getSiswaById, getProfileSiswa, getPengumuman}
