import Joi from "joi";
import { Request, Response, NextFunction } from 'express'

const validateIdSchema = Joi.object({
  id: Joi.number().positive().required()
})

const addEntitySchema = Joi.object({
  email: Joi.string().pattern(/^[a-zA-Z0-9._%+-]+_32rpl@student\.smktelkom-mlg\.sch\.id$/).required(),
  password: Joi.string().min(8).required(),
  nama: Joi.string().required(),
  no_telp: Joi.string().required(),
  absen: Joi.number().positive().min(1).max(35).required(),
  jabatan: Joi.string().valid("Wakil", "Sekertaris", "Bendahara", "Siswa").required()
})

const addEntityValidation = async (req: Request, res: Response, next: NextFunction) => {
  const validate = addEntitySchema.validate(req.body)
  if (validate.error) return res.status(400).json({ message: validate.error.details.map(item => item.message) })
  return next()
}

const updateEntitySchema = Joi.object({
  email: Joi.string().pattern(/^[a-zA-Z0-9._%+-]+_32rpl@student\.smktelkom-mlg\.sch\.id$/).optional(),
  password: Joi.string().min(8).optional(),
  nama: Joi.string().optional(),
  no_telp: Joi.string().optional(),
  absen: Joi.number().positive().min(1).max(35).optional(),
  jabatan: Joi.string().valid("Wakil", "Sekertaris", "Bendahara", "Siswa").optional()
})

const updateEntityValidation = async (req: Request, res: Response, next: NextFunction) => {
  const validateId = validateIdSchema.validate(req.params)
  const validate = updateEntitySchema.validate(req.body)
  if (validateId.error) return res.status(400).json({ message: validateId.error.details.map(item => item.message) })
  if (validate.error) return res.status(400).json({ message: validate.error.details.map(item => item.message) })
  return next()
}

const deleteEntityValidation = async (req: Request, res: Response, next: NextFunction) => {
  const validateId = validateIdSchema.validate(req.params)
  if (validateId.error) return res.status(400).json({ message: validateId.error.details.map(item => item.message) })
  return next()
}

export { addEntityValidation, updateEntityValidation, deleteEntityValidation }
