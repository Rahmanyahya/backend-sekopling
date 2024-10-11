import Joi from "joi";
import {Minggu_Ke, Bulan, Status_Pembayaran} from "@prisma/client"
import { NextFunction, Request, Response } from "express";


const postTransactionSchema = Joi.object({
    siswaID: Joi.number().positive().required(),
    Jumlah: Joi.number().positive().required(),
    Bulan: Joi.string().valid(Bulan).required(),
    Minggu: Joi.string().valid(Minggu_Ke).required(),
    status: Joi.string().valid(Status_Pembayaran).required()
})

const validateTransaction = (req: Request, res: Response, next: NextFunction) => {
    const validate = postTransactionSchema.validate(req.body)
    if (validate.error) return res.status(400).json({message: validate.error.details.map(item => item.message)})
        return next()
}

const idValidationSchema = Joi.object({
    id: Joi.number().positive().required()
})

const updateTransactionSchema = Joi.object({
    siswaID: Joi.number().positive().required(),
    Jumlah: Joi.number().positive().optional(),
    Bulan: Joi.string().valid(Bulan).optional(),
    Minggu: Joi.string().valid(Minggu_Ke).optional(),
    status: Joi.string().valid(Status_Pembayaran).optional()
})

const validateUpdateTransaction = (req: Request, res: Response, next: NextFunction) => {
    const validateId = idValidationSchema.validate(req.params)
    const validate = updateTransactionSchema.validate(req.body)
    if (validateId.error) return res.status(400).json({message: validateId.error.details.map(item => item.message)})
    if (validate.error) return res.status(400).json({message: validate.error.details.map(item => item.message)})
        return next()
}


const validateDeleteTransaction = (req: Request, res: Response, next: NextFunction) => {
    const validate = idValidationSchema.validate(req.params)
    if (validate.error) return res.status(400).json({message: validate.error.details.map(item => item.message)})
        return next()
}

const readTransactionSchema = Joi.object({
    bulan: Joi.string().valid(Bulan).optional(),
    Minggu: Joi.string().valid(Minggu_Ke).optional()
})

const validateReadTransaction = (req: Request, res: Response, next: NextFunction) => {
    const validate = readTransactionSchema.validate(req)
    if (validate.error) return res.status(400).json({message: validate.error.details.map(item => item.message)})
        return next()
}

export {validateDeleteTransaction,validateReadTransaction,validateTransaction,validateUpdateTransaction}