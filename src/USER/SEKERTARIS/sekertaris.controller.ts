
import { Hari, Mapel } from "@prisma/client"
import { addNewEvent, addNewGuru, addNewJadwal, addNewSiswa, addNewTugas } from "../../config"
import {addEvent,addTugas,deleteEvent,deleteTugas,updateEvent,updateTugas,addGuru,addJadwal,deleteGuru,deleteJadwal,updateGuru,updateJadwal, addSiswa, updateSiswa,deleteSiswa,getEventById,getGuruById,getJadwalById,getSiswaById,getTugasById,getAllSiswa} from "./sekertaris.repository"
import { Request, Response } from "express"
import prisma from "../../DATABASE/db"

const addTugasController = async (req: Request, res: Response) => {
    try {
        const {judul,deskripsi,deadLine,guruID} = req.body

        const chekcExistingData = await prisma.tugas.findUnique({where: {judul}})

        if (chekcExistingData != null) return res.status(409).json({message: "Data already exists"})

            const newData: addNewTugas = {
                judul,
                deskripsi,
                deadLine,
                guruID
            }
    

        const result = await addTugas(newData)

        return res.status(201).json({Message: "Succes add Tugas", result})
    } catch (error) {
        return res.status(400).json(error)
    }
}

const updateTugasController = async (req: Request, res: Response) => {
   try {
    const id = Number(req.params.id)
    const {judul,deskripsi,deadLine,guruID} = req.body

    const idValidation = await getTugasById(id)

    if (!idValidation) return res.status(404).json({message: "Data not found"})

    const newData: addNewTugas = {
        judul,
        deskripsi,
        deadLine,
        guruID
    }

    const result = await updateTugas(newData,id)
    return res.status(201).json({Message: "Succes add Tugas", result})
   } catch (error) {
    return res.status(400).json(error)
   }
}

const deleteTugasController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        const idValidation = await getTugasById(id)
        if (!idValidation) return res.status(404).json({message: "Data not found"})

        const result = await deleteTugas(id)
        return res.status(200).json({message: "Succes delete Tugas", result})
    } catch (error) {
        return res.status(400).json(error)
    }
}

const addEventController = async (req: Request, res: Response) => {
    try {
        const {pelaksanaan, judul,deskripsi} = req.body

        const checkExistingEvent = await prisma.event.findUnique({where: {judul}})

        if (checkExistingEvent != null) return res.status(409).json({message: "Data already exists"})
        
        const newData: addNewEvent = {
            pelaksanaan,
            judul,
            deskripsi
        }

        const result = await addEvent(newData)

        return res.status(201).json({message: "Succes add Event", result})
    } catch (error) {
        return res.status(400).json(error)
    }
}

const updateEventController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const {pelaksanaan, judul,deskripsi} = req.body

        const idValidation = await getEventById(id)

        if (!idValidation) return res.status(404).json({message: "Data not found"})
        
        const newData: addNewEvent = {
            pelaksanaan,
            judul,
            deskripsi
        }

        const result = await updateEvent(newData,id)

        return res.status(201).json({message: "Succes update Event", result})
    } catch (error) {
        return res.status(400).json(error)
    }
} 

const deleteEventController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        const idValidation = await getEventById(id)

        if (!idValidation) return res.status(404).json({message: "Data not found"})

        const result = await deleteEvent(id)

        return res.status(200).json({message: "Succes delete Event", result})
    } catch (error) {
        return res.status(400).json(error)
    }
}

const addGuruController = async (req: Request, res: Response) => {
    try {
        const {nama,mapel} = req.body as {nama: string, mapel: Mapel}

        const checkExistingGuru = await prisma.guru.findUnique({where: {nama}})

        if (checkExistingGuru != null) return res.status(400).json({message: "Guru is exist"})

        const newData: addNewGuru = {
            nama,
            mapel
        }

        const result = await addGuru(newData)

        return res.status(201).json({message: "Succes add Guru", result})
    } catch (error) {
        return res.status(400).json(error)
    }
}

const updateGuruController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const {nama,mapel} = req.body as {nama: string, mapel: Mapel}

        const idValidation = await getGuruById(id)
        if (!idValidation) return res.status(404).json({message: "Data not found"})

        const newData: addNewGuru = {
            nama,
            mapel
        }

        const result = await updateGuru(newData,id)

        return res.status(201).json({message: "Succes update data Guru", result})
    } catch (error) {
        return res.status(400).json(error)
    }
}

const deleteGuruController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        const idValidation = await getGuruById(id)
        if (!idValidation) return res.status(404).json({message: "Data not found"})
        
        const result = await deleteGuru(id)
        
        return res.status(200).json({message: "Succes delete Guru", result})
    } catch (error) {
        return res.status(400).json(error)
    }
}

const addJadwalController = async (req: Request, res: Response) => {
    try {
        const {hari,guruID} = req.body as {hari: Hari, guruID: number}

        const checkExistingJadwal = await prisma.jadwal.findFirst({where: {
            OR: [
               {guruID},
               {hari} 
            ]
        }})

        if (checkExistingJadwal != null) return res.status(400).json({message: "Jadwal is exist"})

        const newData: addNewJadwal = {
            hari,
            guruID
        }

        const result = await addJadwal(newData)
        
        return res.status(201).json({message: "Succes add Jadwal", result})
    } catch (error) {
        return res.status(400).json(error)
    }
}

const updateJadwalController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params)
        const {hari,guruID} = req.body as {hari: Hari, guruID: number}

        const idValidation = await getJadwalById(id)
        if (!idValidation) return res.status(404).json({message: "Data not found"})

        const newData: addNewJadwal = {
            hari,
            guruID
        }

        const result = await updateJadwal(newData, id)
        
        return res.status(201).json({message: "Succes update data Jadwal", result})
    } catch (error) {
        return res.status(400).json(error)
    }
}

const deleteJadwalController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        const idValidation = await getJadwalById(id)
        if (!idValidation) return res.status(404).json({message: "Data not found"})
        
        const result = await deleteJadwal(id)
        
        return res.status(200).json({message: "Succes delete Jadwal", result})
    } catch (error) {
        return res.status(400).json(error)
    }
}

const addSiswaController = async (req: Request, res: Response) => {
    try {
        const {email,password,nama,no_telp, absen} = req.body

        const checkexistingSiswa = await prisma.siswa.findFirst({
            where: {absen}
        })

        if (checkexistingSiswa != null) return res.status(400).json({message: "Siswa is already exist"})
        

        const newData:  addNewSiswa = {
            email,
            password,
            nama,
            no_telp,
            absen
        }

        const result = await addSiswa(newData)
        
        return res.status(201).json({message: "Succes add Siswa", result})
    } catch (error) {
        return res.status(400).json(error)
    }
}

const updateSiswaController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const {email,password,nama,no_telp,absen} = req.body

        const idValidation = await getSiswaById(id)
        if (!idValidation) return res.status(404).json({message: "Data not found"})

        const newData:  addNewSiswa = {
            email,
            password,
            nama,
            no_telp,
            absen
        }

        const result = await updateSiswa(newData, id)
        
        return res.status(201).json({message: "Succes update data Siswa", result})
    } catch (error) {
        return res.status(400).json(error)
    }
}

const getAllSiswaController = async (req: Request, res: Response) => {
    try {
        const result = await getAllSiswa()
        return res.status(200).json({message: "Succes get all Siswa", result})
    } catch (error) {
        return res.status(400).json(error)
    }
}

const deleteSiswaController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        const idValidation = await getSiswaById(id)
        if (!idValidation) return res.status(404).json({message: "Data not found"})
            
        const result = await deleteSiswa(id)
        
        return res.status(200).json({message: "Succes delete Siswa", result})
    } catch (error) {
        return res.status(400).json({message: "Succes delete siswa"})
    }
}

export {
    addTugasController,updateTugasController,deleteTugasController,
    addEventController, updateEventController, deleteEventController,
    addGuruController, updateGuruController, deleteGuruController,
    addJadwalController, updateJadwalController, deleteJadwalController,
    addSiswaController, updateSiswaController, getAllSiswaController, deleteSiswaController
}