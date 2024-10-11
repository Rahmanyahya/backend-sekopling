import { addNewEvent, addNewGuru, addNewJadwal, addNewSiswa, addNewTugas } from "../../config";
import prisma from "../../DATABASE/db";


/** Tugas */

const addTugas = async (newTugas: addNewTugas) => {
    return await prisma.tugas.create({ data: newTugas })
}

const updateTugas = async (newTugas: addNewTugas, id: number) => {
    return await prisma.tugas.update({ where: {id}, data: newTugas})
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
    return await prisma.jadwal.create({ data: newData })
}

const updateJadwal = async (newData: addNewJadwal, id: number) => {
    return await prisma.jadwal.update({ where: {id}, data: newData})
}

const deleteJadwal = async (id: number) => {
    return await prisma.jadwal.delete({ where: {id}})
}

const getJadwalById = async (id: number) => {
    return await prisma.jadwal.findFirst({where: {id}})
}

/** Siswa */

const addSiswa = async (newData: addNewSiswa) => {
    return await prisma.siswa.create({data: {email: newData.email, password: newData.password, nama: newData.nama, no_telp: newData.no_telp, photo: "https://tse4.mm.bing.net/th?id=OIP.ELnJq_JhiyfewhCMKOkNfwHaHa&pid=Api&P=0&h=180", jabatan: "Siswa", absen: newData.absen}})
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

export {addTugas,updateTugas,deleteTugas,addEvent,updateEvent,deleteEvent
    ,addGuru, updateGuru, deleteGuru,
    addJadwal, updateJadwal, deleteJadwal,
    addSiswa, updateSiswa, deleteSiswa, getAllSiswa,
    getTugasById, getEventById, getGuruById, getJadwalById, getSiswaById
} 

