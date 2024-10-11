import {Request,Response} from 'express'
import {addKasService,deleteKasService,getKasService,updateKasService} from './bendahara.service'
import { addNewKasTransaction } from '../../config'
import { deleteKas, getKasById } from './bendahara.repository'
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

    const result = await addKasService(dataTransaction)

    return res.status(201).json({Message: "Succes add data", result})
   } catch (error) {
    return res.status(500).json(error)
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

        const result = await updateKasService(newDataTransaction, id)
        
        return res.status(200).json({message: "Data Transaction Succes Uodated", result})

    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteKasController = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        const valdationId = await getKasById(id)
        if (!valdationId) return res.status(404).json({message: "Data not found"})
        
        const deletedKas = await deleteKas(id)
        
        return res.status(200).json({message: "Data Transaction Succes Deleted", deletedKas})
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getKasController = async (req: Request, res: Response) => {
    try {
       
        const {Bulan, Minggu} = req.query as {Bulan: Bulan, Minggu: Minggu_Ke}

        const listKas = await getKasService(Bulan, Minggu)
        if (listKas == null) return res.status(404).json({message: "No data this month"})
        return res.status(200).json({message: "Succes get kas",  listKas})
    } catch (error) {
        return res.status(500).json(error)
    }
}

export {addKasController, updateKasController, deleteKasController, getKasController}