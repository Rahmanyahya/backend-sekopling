import { Request, Response } from "express"
import {getEvent,getKas,getMapel,getTugas,updateProfile,getSiswaById, getProfileSiswa, getAllGuru} from "./siswa.repository"
import { CustomRequest, updateProfileData } from "../../config"
import { deleteImage } from "../../utils/deletePhoto"

const getKasController = async (req: CustomRequest, res: Response) => {
  try {
    const idSiswa = req.user.id
    const listKas = await getKas(idSiswa)

    return listKas == null ? res.status(404).json({message: "this month you have not paid cash"}) : res.status(200).json({message: "Succes get kas",  listKas})
  } catch (error) {
    return res.status(500).json(error)
  }
}

const getEventController = async (req: Request, res: Response) => {
  try {
    const listEvent = await getEvent()
    return listEvent == null ? res.status(404).json({message: "No event this month"}) : res.status(200).json({message: "Succes get event",  listEvent})
  } catch (error) {
    return res.status(500).json(error)
  }
}

const getMapelController = async (req: Request, res: Response) => {
  try {
   const listMapel = await getMapel()
   return listMapel == null ? res.status(500).json({message: "Under Maintanance"}) : res.status(200).json({message: "Succes get mapel", listMapel}) 
  } catch (error) {
    return res.status(500).json(error)
  }
}

const getTugasController = async (req: Request, res: Response) => {
  try {
    const listTugas = await getTugas()
 return listTugas == null ? res.status(404).json({message: "No home work this month"})  : res.status(200).json({message: "Succes get tugas", listTugas})
  } catch (error) {
    return res.status(500).json(error)
  }
}

const updateProfileController = async (req: CustomRequest, res: Response) => {
 try {
  const idSiswa = req.user.id  
  const  {email,no_telp} = req.body
  const checkExixtingSiswa = await getSiswaById(idSiswa)
  
  if (checkExixtingSiswa == null) {
    deleteImage(req.file?.filename)
    return res.status(404).json({message: "Siswa not found"})
  } 
  
  const newData: updateProfileData = {
    id: idSiswa,
    email: email ? email : checkExixtingSiswa.email,
    no_telp: no_telp ? no_telp : checkExixtingSiswa.no_telp,
    photo: req.file?.filename? req.file.filename : checkExixtingSiswa.photo
  }

  const updateData = await updateProfile(newData)

  return res.status(200).json({message: "Profile updated successfully", data: updateData})

 } catch (error) {
  deleteImage(req.file?.filename)
  return res.status(500).json(error)
 }
}

const getUserProfileController = async (req: CustomRequest, res: Response) => {
 try {
  const userID = req.user.id
  const userProfile = await getProfileSiswa(userID)

  return userProfile == null ? res.status(404).json({message: "Profile not found"}) : res.status(200).json({message: "succes get profile", userProfile})
 } catch (error) {
  return res.status(500).json(error)
 }
}

const getAllGuruController = async (req: CustomRequest, res: Response) => {
  try {
    const listGuru = await getAllGuru()
   return listGuru == null ? res.status(404).json({message: "No teacher added"}) : res.status(200).json({message: "Succes get All Teacher", listGuru})
  } catch (error) {
    return res.status(500).json(error)
  }
}

export {getKasController, getEventController, getMapelController, getTugasController, updateProfileController, getUserProfileController}


