import { Role } from '@prisma/client'
import { creatEntity, deleteEntity, updateEntity } from './ketua.repository'
import { Response, Request } from "express"
import prisma from '../../DATABASE/db'
import { entityData } from '../../config'
import { getSiswaById } from '../SISWA/siswa.repository'
import { getAllSiswa } from '../SEKERTARIS/sekertaris.repository'

const createEntityController = async (req: Request, res: Response) => {
  try {
    const { email, password, nama, no_telp, absen, jabatan } = req.body as { email: string, password: string, nama: string, no_telp: string, absen: number, jabatan: Role }

    const checkExistingEntity = await prisma.siswa.count({
      where: {
        OR: [
          { email },
          { absen }
        ]
      }
    })

    if (checkExistingEntity > 0) return res.status(401).json({ messsage: "Entity is exist", checkExistingEntity })

    const newData: entityData = {
      email,
      password,
      nama,
      no_telp,
      absen,
      jabatan
    }

    const result = await creatEntity(newData)

    return res.status(201).json({ message: "Succes add entity", result })

  } catch (error) {
    return res.status(400).json(error)
  }
}

const updateEntityController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const { email, password, nama, no_telp, absen, jabatan } = req.body as { email: string, password: string, nama: string, no_telp: string, absen: number, jabatan: Role }

    const idValidation = await getSiswaById(id)

    if (!idValidation) return res.status(400).json({ message: "Entity not found" })

    const newData: entityData = {
      email,
      password,
      nama,
      no_telp,
      absen,
      jabatan
    }

    const result = await updateEntity(newData, id)

    return res.status(201).json({ message: "Succes update entity", result })

  } catch (error) {
    return res.status(400).json(error)
  }
}

const deleteEntityController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const idValidation = await getSiswaById(id)

    if (idValidation == null) return res.status(400).json({ message: "Entity not found" })

    const result = await deleteEntity(id)

    return res.status(200).json({ message: "Succes delete entity", result })

  } catch (error) {
    return res.status(400).json(error)
  }
}

const getAllEntitiy = async (req: Request, res: Response) => {
  try {
    const listEntity = await getAllSiswa()
    if (listEntity == null) return res.status(404).json({ message: "no entity found" })
    return res.status(200).json({ message: "Succes get all entity", listEntity })
  } catch (error) {
    return res.status(500).json(error)
  }
}

export { createEntityController, updateEntityController, deleteEntityController, getAllEntitiy }
