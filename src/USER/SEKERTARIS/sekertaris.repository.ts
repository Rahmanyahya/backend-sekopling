import { addNewEvent, addNewGuru, addNewJadwal, addNewSiswa, addNewTugas } from "../../config";
import prisma from "../../DATABASE/db";


/** Tugas */

const addTugas = async (newTugas: addNewTugas) => {
    const data =  await prisma.tugas.create({ data: newTugas, include: {guru: {select: {nama: true, mapel: true}}} })
    return {id: data.id,guru: data.guru.nama,mapel: data.guru.mapel,judul: data.judul,deskripsi: data.deskripsi,deadLine: data.deadLine,}
}

const updateTugas = async (newTugas: addNewTugas, id: number) => {
    const data = await prisma.tugas.update({ where: {id}, data: newTugas, include: {guru: {select: {nama: true, mapel: true}}}})
    return {id: data.id,guru: data.guru.nama,mapel: data.guru.mapel,judul: data.judul,deskripsi: data.deskripsi,deadLine: data.deadLine,}
} 

const deleteTugas = async (id: number) => {
    return await prisma.tugas.delete({ where: {id}})
}

const getTugasById = async (id: number) => {
    return await prisma.tugas.findFirst({where: {id}})
}




/** Event */

const addEvent = async (event: addNewEvent) => {
    return await prisma.event.create({data: event})
}

const updateEvent = async (event: addNewEvent, id: number) => {
    return await prisma.event.update({ where: {id}, data: event})
}

const deleteEvent = async (id: number) => {
    return await prisma.event.delete({ where: {id}})
}

const getEventById = async (id: number) => {
    return await prisma.event.findFirst({where: {id}})
}



/** Guru */

const addGuru = async (newData: addNewGuru) => {
    return await prisma.guru.create({ data: newData })
}

const updateGuru = async (newData: addNewGuru, id: number) => {
    return await prisma.guru.update({ where: {id}, data: newData})
}

const deleteGuru = async (id: number) => {
    return await prisma.guru.delete({ where: {id}})
}

const getGuruById = async (id: number) => {
    return await prisma.guru.findFirst({where: {id}})
}

/** Jadwal */

const addJadwal = async (newData: addNewJadwal) => {
    const data = await prisma.jadwal.create({ data: newData , include: {guru: {select: {nama: true, mapel: true}}}})
    return {id: data.id, hari: data.hari, guru: data.guru?.nama, mapel: data.guru?.mapel}
}

const updateJadwal = async (newData: addNewJadwal, id: number) => {
     const data = await prisma.jadwal.update({ where: {id}, data: newData, include: {guru: {select: {nama: true, mapel: true}}}})
      return {id: data.id, hari: data.hari, guru: data.guru?.nama, mapel: data.guru?.mapel}
}

const deleteJadwal = async (id: number) => {
    return await prisma.jadwal.delete({ where: {id}})
}

const getJadwalById = async (id: number) => {
    return await prisma.jadwal.findFirst({where: {id}})
}

/** Siswa */

const addSiswa = async (newData: addNewSiswa) => {
    const data = await prisma.siswa.create({data: {email: newData.email, password: newData.password, nama: newData.nama, no_telp: newData.no_telp, photo: "https://tse4.mm.bing.net/th?id=OIP.ELnJq_JhiyfewhCMKOkNfwHaHa&pid=Api&P=0&h=180", jabatan: "Siswa", absen: newData.absen}})
    return {id: data.id, nama: data.nama, absen: data.absen, email: data.email, no_telp: data.no_telp}
} 

const updateSiswa = async (newData: addNewSiswa, id: number) => {
    return await prisma.siswa.update({where: {id}, data: {email: newData.email, password: newData.password, nama: newData.nama, no_telp: newData.no_telp, photo: "https://tse4.mm.bing.net/th?id=OIP.ELnJq_JhiyfewhCMKOkNfwHaHa&pid=Api&P=0&h=180", jabatan: "Siswa", absen: newData.absen}})
} 

const deleteSiswa = async (id: number) => {
    return await prisma.siswa.delete({ where: {id}})
}

const getAllSiswa = async () => {
    const data = await prisma.siswa.findMany({orderBy: {absen: "asc"}})
    return data.length > 0 ? data : null
}

const getSiswaById = async (id: number) => {
    return await prisma.siswa.findFirst({where: {id}})
}

/** pengumuman */
const addPengumuman = async (deskripsi: string) =>  {
 return await prisma.pengumuman.create({data: {deskripsi}})
}

const updatePengumuman = async (id: number,deskripsi: string) => {
    return await prisma.pengumuman.update({where: {id}, data: {deskripsi}})
}

const deletePengumuman = async (id: number) => {
    return await prisma.pengumuman.delete({where: {id}})
}

const getPengumumanById = async (id: number) => {
    return await prisma.pengumuman.findFirst({where: {id}})
}

export {addTugas,updateTugas,deleteTugas,addEvent,updateEvent,deleteEvent
    ,addGuru, updateGuru, deleteGuru,
    addJadwal, updateJadwal, deleteJadwal,
    addSiswa, updateSiswa, deleteSiswa, getAllSiswa,
    getTugasById, getEventById, getGuruById, getJadwalById, getSiswaById,
    addPengumuman, updatePengumuman, deletePengumuman, getPengumumanById}  // Add more functions as needed  // Add more types as needed  // Add more interfaces as needed  // Add more models as needed  // Add more prisma queries as needed  // Add more prisma mutations as needed  // Add more prisma subscriptions as needed  // Add more prisma hooks as needed  // Add more prisma error handling as needed  // Add more prisma event listeners as needed


