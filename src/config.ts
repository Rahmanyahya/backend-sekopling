import { Request } from "express";
import path = require("path");
import { Bulan, Minggu_Ke, Status_Pembayaran, Mapel, Hari, Role } from "@prisma/client";

interface CustomRequest extends Request {
  user?: any;
}

type addNewKasTransaction = {
  siswaId: number;
  price: number;
  bulan: Bulan;
  minggu: Minggu_Ke;
  status: Status_Pembayaran;
}

type updateProfileData = {
  id: number;
  photo: string | null;
  email: string;
  no_telp: string
}

type addNewTugas = {
  judul: string;
  deskripsi: string;
  deadLine?: Date;
  guruID: number;
}

type addNewEvent = {
  judul: string;
  deskripsi: string;
  pelaksanaan: Date;
}

type addNewGuru = {
  nama: string;
  mapel: Mapel,
}

type addNewJadwal = {
  hari: Hari
  guruID: number;
  start: Date;
  end: Date
}

type addNewSiswa = {
  email: string;
  password: string;
  nama: string;
  no_telp: string;
  absen: number

}

type entityData = {
  email: string;
  absen: number;
  password: string;
  nama: string;
  no_telp: string;
  jabatan: Role
}

const root_dir = path.join(__dirname, '../')

export { addNewJadwal, CustomRequest, updateProfileData, root_dir, addNewKasTransaction, addNewEvent, addNewTugas, addNewGuru, addNewSiswa, entityData };

