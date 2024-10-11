import { Bulan, Minggu_Ke } from "@prisma/client"
import { addNewKasTransaction } from "../../config"
import { addKas, deleteKas, getKas, getKasById, updateKas } from "./bendahara.repository"

const addKasService = async (newData: addNewKasTransaction) => {
  newData.price *= 1000
  return await addKas(newData)
}

const updateKasService = async (newData: addNewKasTransaction, id: number) => {
  return await updateKas(newData,id)
}

const deleteKasService = async (id: number) => {
    return await deleteKas(id)
}

const getKasService = async (Month: Bulan | undefined,Week: Minggu_Ke | undefined) => {
  return await getKas(Month,Week)
}

export {addKasService,updateKasService,deleteKasService,getKasService}