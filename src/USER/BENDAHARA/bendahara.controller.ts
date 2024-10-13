import {Request,Response} from 'express'
import {addKasService,deleteKasService,getKasService,updateKasService} from './bendahara.service'
import { addNewKasTransaction } from '../../config'
import { getAllSiswa, getKasById } from './bendahara.repository'
import { Bulan, Minggu_Ke } from '@prisma/client'
import prisma from '../../DATABASE/db'

const addKasController = async (req: Request,res: Response) => {
   try {
    const {siswaId,price,bulan,minggu,status} = req.body

    const checkExistingData = await prisma.transaksi_kas.findFirst({
        where: {
            OR: [
                {siswaID: siswaId},
                {Minggu: minggu},
                {bulan}
            ]
        }
    })

    if (checkExistingData != null) return res.status(409).json({message: "Transaction is exist"})

    const dataTransaction: addNewKasTransaction = {
        siswaId,price,bulan,minggu,status
    }

    const data = await addKasService(dataTransaction)

    return res.status(201).json({Message: "Succes save transaction", data})
   } catch (error) {
     return res.status(500).json({message: "internal error somthing went wrong", error})
   }
}

const updateKasController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id) 
        const {price,bulan,minggu,status} = req.body

        const idValidation = await getKasById(id)
        if (!idValidation) return res.status(404).json({message: "Data not found"})
        const newDataTransaction: addNewKasTransaction = {
            siswaId: idValidation.id,
            price: price ? price : idValidation.Jumlah,
            bulan: bulan? bulan : idValidation.bulan,
            minggu: minggu? minggu : idValidation.Minggu,
            status: status? status : idValidation.status
        }

        const data = await updateKasService(newDataTransaction, id)
        
        return res.status(200).json({message: "Data Transaction Succes Updated", data})

    } catch (error) {
         return res.status(500).json({message: "internal error somthing went wrong", error})
    }
}

const deleteKasController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        const valdationId = await getKasById(id)
        if (!valdationId) return res.status(404).json({message: "Data not found"})
        
        const deletedKas = await deleteKasService(id)
        
        return res.status(200).json({message: "Data Transaction Succes Deleted"})
    } catch (error) {
         return res.status(500).json({message: "internal error somthing went wrong", error})
    }
}

const getKasController = async (req: Request, res: Response) => {
    try {
        const {Bulan, Minggu} = req.query as {Bulan: Bulan, Minggu: Minggu_Ke}

        const listKas = await getKasService(Bulan, Minggu)

        if (listKas == null) return res.status(200).json({message: "Data is empty"})

        const kas = listKas.map((data) => ({
            id: data.id,
            nama: data.siswa.nama,
            jumlah: data.Jumlah,
            bulan: data.bulan,
            minggu: data.Minggu,
            status: data.status,
            tgl_pembayaran: data.createdAt
        }))

        return res.status(200).json({message: "Succes get kas",  kas})
    } catch (error) {
         return res.status(500).json({message: "internal error somthing went wrong", error})
    }
}

const getAllSiswaController = async (req: Request, res: Response) => {
    try {
        const kasData = await getAllSiswa()
        if (kasData.length == 0) return res.status(200).json({message:"no data saved right now"})
        return res.status(200).json({message: "Succes get all Siswa", kasData})
    } catch (error) {
        return 
    }
}

export {addKasController, updateKasController, deleteKasController, getKasController, getAllSiswaController}