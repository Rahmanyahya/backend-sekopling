import { addNewKasTransaction } from "../../config";
import {Bulan, Minggu_Ke} from "@prisma/client"
import prisma from "../../DATABASE/db";

const addKas = async (newData: addNewKasTransaction) => {
   return prisma.transaksi_kas.create({data: {
    siswaID: newData.siswaId,
    Jumlah: newData.price,
    bulan: newData.bulan,
    Minggu: newData.minggu,
    status: newData.status
   }})
}

const updateKas = async (newData: addNewKasTransaction, id: number) => {
   return await prisma.transaksi_kas.update({where: {id}, data: {
      siswaID: newData.siswaId,
      Jumlah: newData.price,
      bulan: newData.bulan,
      Minggu: newData.minggu,
      status: newData.status
   }})
}

const deleteKas = async (id: number) => {
   return await prisma.transaksi_kas.delete({where: {id}})
}

const getKas = async (Months: Bulan | undefined, Weeks: Minggu_Ke | undefined) => {
   let data
   if (!Months && !Weeks) {
      data = await prisma.transaksi_kas.findMany()
      return data ? data : null
   } else if (!Weeks && Months) {
      data = await prisma.transaksi_kas.findMany({where: {bulan: Months}})
      return data? data : null
   } else if (Weeks && !Months) {
      data = await prisma.transaksi_kas.findMany({where: {Minggu: Weeks}})
      return data? data : null
   } else {
      data = await prisma.transaksi_kas.findMany({where: {bulan: Months, Minggu: Weeks}})
      return data ? data : null
   }
}

const getKasById = async (id: number) => {
   return await prisma.transaksi_kas.findFirst({where: {id}})
}

export {addKas,deleteKas,getKas,updateKas,getKasById}