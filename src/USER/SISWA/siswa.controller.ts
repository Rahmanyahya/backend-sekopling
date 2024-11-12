import { Request, Response } from "express"
import { getEvent, getKas, getMapel, getTugas, updateProfile, getSiswaById, getProfileSiswa, getPengumuman, getGuru } from "./siswa.repository"
import { CustomRequest, updateProfileData } from "../../config"
import { deleteImage } from "../../utils/deletePhoto"

const getKasController = async (req: CustomRequest, res: Response) => {
  try {
    const idSiswa = req.user.id
    const listKas = await getKas(idSiswa)

    if (listKas == null) return res.status(404).json({ message: "this month you have not paid cash" })

    const Kas = listKas.map((data) => ({
      id: data.id,
      nama: data.siswa.nama,
      jumlah: data.Jumlah,
      Bulan: data.bulan,
      Minggu: data.Minggu,
      status: data.status,
      tgl_pembayaran: data.createdAt
    }))

    return res.status(200).json({ message: "Succes get kas", Kas })
  } catch (error) {
    return res.status(500).json({ message: "internal error somthing went wrong", error })
  }
}

const getEventController = async (req: Request, res: Response) => {
  try {
    const listEvent = await getEvent()

    if (listEvent == null) return res.status(404).json({ message: "No event this month" })

    const Event = listEvent.map((data) => ({
      id: data.id,
      pelasanaan: data.pelaksanaan,
      judul: data.judul,
      deskripsi: data.deskripsi
    }))

    return res.status(200).json({ message: "Succes get event", Event })
  } catch (error) {
    return res.status(500).json({ message: "internal error somthing went wrong", error })
  }
}

const getMapelController = async (req: Request, res: Response) => {
  try {
    const listMapel = await getMapel()

    if (listMapel == null) return res.status(403).json({ message: "Under Maintanance" })

    const Mapel = listMapel.map((data) => ({
      id: data.id,
      hari: data.hari,
      guru: data.guru?.nama,
      mapel: data.guru?.mapel
    }))

    return res.status(200).json({ message: "Succes get mapel", Mapel })
  } catch (error) {
    return res.status(500).json({ message: "internal error somthing went wrong", error })
  }
}

const getTugasController = async (req: Request, res: Response) => {
  try {
    const listTugas = await getTugas()

    if (listTugas == null) return res.status(404).json({ message: "No home work now" })

    const Tugas = listTugas.map((tugas) => ({
      id: tugas.id,
      mapel: tugas.guru.mapel,
      judul: tugas.judul,
      description: tugas.deskripsi,
      deadline: tugas.deadLine,
      guru: tugas.guru.nama
    }))

    return res.status(200).json({ message: "Succes get tugas", Tugas })

  } catch (error) {
    return res.status(500).json({ message: "internal server eror, something went wrong", error })
  }
}

const updateProfileController = async (req: CustomRequest, res: Response) => {
  try {
    const idSiswa = req.user.id
    const { no_telp } = req.body
    const checkExixtingSiswa = await getSiswaById(idSiswa)

    if (checkExixtingSiswa == null) {
      deleteImage(req.file?.filename)
      return res.status(404).json({ message: "Siswa not found" })
    }

    const newData: updateProfileData = {
      id: idSiswa,
      email: checkExixtingSiswa.email,
      no_telp: no_telp ? no_telp : checkExixtingSiswa.no_telp,
      photo: req.file?.filename ? req.file.filename : checkExixtingSiswa.photo
    }

    const updateData = await updateProfile(newData)
    deleteImage(checkExixtingSiswa.photo)

    return res.status(200).json({ message: "Profile updated successfully", data: updateData })

  } catch (error) {
    deleteImage(req.file?.filename)
    return res.status(500).json({ message: "internal error somthing went wrong", error })
  }
}

const getUserProfileController = async (req: CustomRequest, res: Response) => {
  try {
    const userID = req.user.id
    const userProfile = await getProfileSiswa(userID)

    return userProfile == null ? res.status(404).json({ message: "Profile not found" }) : res.status(200).json({ message: "succes get profile", userProfile })
  } catch (error) {
    return res.status(500).json({ message: "internal error somthing went wrong", error })
  }
}

const getPengumumanController = async (req: Request, res: Response) => {
  try {
    const pengumuman = await getPengumuman()

    if (pengumuman == null) return res.status(404).json({ message: "No pengumuman this month" })
    return res.status(200).json({ message: "succes get pengumuman", pengumuman })
  } catch (error) {
    return res.status(500).json({ message: "internal error somthing went wrong", error })
  }
}

export const getGuruControl = async (req: Request, res: Response) => {
  try {
    const data = await getGuru()
    return data == null ? res.status(404).json({ message: "No Teacher Registered" }) : res.status(200).json({
      message: "succes get guru",
      data
    })
  } catch (error) {
    return res.status(500).json({ message: `something went wrong ${error}` })
  }
}

export { getKasController, getEventController, getMapelController, getTugasController, updateProfileController, getUserProfileController, getPengumumanController }


