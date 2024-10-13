import { addNewKasTransaction } from "../../config";
import {Bulan, Minggu_Ke} from "@prisma/client"
import prisma from "../../DATABASE/db";

const addKas = async (newData: addNewKasTransaction) => {
   const data = await prisma.transaksi_kas.create({data: {
    siswaID: newData.siswaId,
    Jumlah: newData.price,
    bulan: newData.bulan,
    Minggu: newData.minggu,
    status: newData.status
   }, include: {siswa: {select: {nama: true}}}})

   return {
      siswa: data.siswa.nama,
      price: data.Jumlah,
      bulan: data.bulan,
      minggu: data.Minggu,
      status: data.status
   }
}

const updateKas = async (newData: addNewKasTransaction, id: number) => {
   const data = await prisma.transaksi_kas.update({where: {id}, data: {
      siswaID: newData.siswaId,
      Jumlah: newData.price,
      bulan: newData.bulan,
      Minggu: newData.minggu,
      status: newData.status
   },include: {siswa: {select: {nama: true}}}})

   return {
      siswa: data.siswa.nama,
      price: data.Jumlah,
      bulan: data.bulan,
      minggu: data.Minggu,
      status: data.status
   }
}

const deleteKas = async (id: number) => {
   const data= await prisma.transaksi_kas.delete({where: {id},include: {siswa: {select: {nama: true}}}})
   return {
      siswa: data.siswa.nama,
      price: data.Jumlah,
      bulan: data.bulan,
      minggu: data.Minggu,
      status: data.status
   }
}

const getKas = async (Months: Bulan | undefined, Weeks: Minggu_Ke | undefined) => {
   let data
   if (!Months && !Weeks) {
      data = await prisma.transaksi_kas.findMany({include: {siswa: {select: {nama: true}}}})
      return data ? data : null
   } else if (!Weeks && Months) {
      data = await prisma.transaksi_kas.findMany({where: {bulan: Months},include: {siswa: {select: {nama: true}}}})
      return data? data : null
   } else if (Weeks && !Months) {
      data = await prisma.transaksi_kas.findMany({where: {Minggu: Weeks},include: {siswa: {select: {nama: true}}}})
      return data? data : null
   } else {
      data = await prisma.transaksi_kas.findMany({where: {bulan: Months, Minggu: Weeks}, include: {siswa: {select: {nama: true}}}})
      return data ? data : null
   }
}

const getKasById = async (id: number) => {
   return await prisma.transaksi_kas.findFirst({where: {id}})
}

const getAllSiswa = () => {
   return prisma.siswa.findMany({select: {id: true, nama: true}})
}

export {addKas,deleteKas,getKas,updateKas,getKasById, getAllSiswa}