import Joi from "joi";
import { Request, Response, NextFunction } from "express"
import { Hari, Mapel } from "@prisma/client";

const validateIdSchema = Joi.object({
  id: Joi.number().positive().required()
})

const addTugasSchema = Joi.object({
  judul: Joi.string().required(),
  deskripsi: Joi.string().required(),
  deadLine: Joi.date().optional().min(Date.now()).optional(),
  guruID: Joi.number().positive().required()
})

const validateAddTugas = async (req: Request, res: Response, next: NextFunction) => {
  const validate = addTugasSchema.validate(req.body)
  if (validate.error) return res.status(400).json({ message: validate.error.details.map(item => item.message) })
  return next()
}

const updateTugasSchema = Joi.object({
  judul: Joi.string().optional(),
  deskripsi: Joi.string().optional(),
  deadLine: Joi.date().optional().min(Date.now()).optional(),
  guruID: Joi.number().positive().optional()
})

const validateUpdateTugas = async (req: Request, res: Response, next: NextFunction) => {
  const validateId = validateIdSchema.validate(req.params)
  const validate = updateTugasSchema.validate(req.body)
  if (validateId.error) return res.status(400).json({ message: validateId.error.details.map(item => item.message) })
  if (validate.error) return res.status(400).json({ message: validate.error.details.map(item => item.message) })
  return next()
}

const validateDeleteTugas = async (req: Request, res: Response, next: NextFunction) => {
  const validateId = validateIdSchema.validate(req.params)
  if (validateId.error) return res.status(400).json({ message: validateId.error.details.map(item => item.message) })
  return next()
}

const addEventSchema = Joi.object({
  judul: Joi.string().required(),
  deskripsi: Joi.string().required(),
  pelaksanaan: Joi.date().min(Date.now()).required(),
})

const validateAddEvent = async (req: Request, res: Response, next: NextFunction) => {
  const validate = addEventSchema.validate(req.body)
  if (validate.error) return res.status(400).json({ message: validate.error.details.map(item => item.message) })
  return next()
}

const updateEventSchema = Joi.object({
  judul: Joi.string().optional(),
  deskripsi: Joi.string().optional(),
  pelaksanaan: Joi.date().min(Date.now()).optional(),
})

const validateUpdateEvent = async (req: Request, res: Response, next: NextFunction) => {
  const validateId = validateIdSchema.validate(req.params)
  const validate = updateEventSchema.validate(req.body)
  if (validateId.error) return res.status(400).json({ message: validateId.error.details.map(item => item.message) })
  if (validate.error) return res.status(400).json({ message: validate.error.details.map(item => item.message) })
  return next()
}

const validateDeleteEvent = async (req: Request, res: Response, next: NextFunction) => {
  const validateId = validateIdSchema.validate(req.params)
  if (validateId.error) return res.status(400).json({ message: validateId.error.details.map(item => item.message) })
  return next()
}

const addGuruSchema = Joi.object({
  nama: Joi.string().required(),
  mapel: Joi.string().valid("RPL", "MATEMATIKA", "SEJARAH", "PKN", "BAHASA_INDONESIA", "BK", "AGAMA", "TKJ", "ENGLISH_DISCOVERIES", "BAHASA_JAWA").required()
})

const validateAddGuru = async (req: Request, res: Response, next: NextFunction) => {
  const validate = addGuruSchema.validate(req.body)
  if (validate.error) return res.status(400).json({ message: validate.error.details.map(item => item.message) })
  return next()
}

const updateGuruSchema = Joi.object({
  nama: Joi.string().optional(),
  mapel: Joi.string().valid("RPL", "MATEMATIKA", "SEJARAH", "PKN", "BAHASA_INDONESIA", "BK", "AGAMA", "TKJ", "ENGLISH_DISCOVERIES", "BAHASA_JAWA").optional()
})

const validateUpdateGuru = async (req: Request, res: Response, next: NextFunction) => {
  const validateId = validateIdSchema.validate(req.params)
  const validate = updateGuruSchema.validate(req.body)
  if (validateId.error) return res.status(400).json({ message: validateId.error.details.map(item => item.message) })
  if (validate.error) return res.status(400).json({ message: validate.error.details.map(item => item.message) })
  return next()
}

const validateDeleteGuru = async (req: Request, res: Response, next: NextFunction) => {
  const validateId = validateIdSchema.validate(req.params)
  if (validateId.error) return res.status(400).json({ message: validateId.error.details.map(item => item.message) })
  return next()
}

const addJadwalSchema = Joi.object({
  hari: Joi.string().valid(Hari).required(),
  guruID: Joi.number().positive().required()
})

const validateAddJadwal = async (req: Request, res: Response, next: NextFunction) => {
  const validate = addJadwalSchema.validate(req.body)
  if (validate.error) return res.status(400).json({ message: validate.error.details.map(item => item.message) })
  return next()
}

const updateJadwalSchema = Joi.object({
  hari: Joi.string().valid(Hari).optional(),
  guruID: Joi.number().positive().optional()
})

const validateUpdateJadwal = async (req: Request, res: Response, next: NextFunction) => {
  const validateId = validateIdSchema.validate(req.params)
  const validate = updateJadwalSchema.validate(req.body)
  if (validateId.error) return res.status(400).json({ message: validateId.error.details.map(item => item.message) })
  if (validate.error) return res.status(400).json({ message: validate.error.details.map(item => item.message) })
  return next()
}

const validateDeleteJadwal = async (req: Request, res: Response, next: NextFunction) => {
  const validateId = validateIdSchema.validate(req.params)
  if (validateId.error) return res.status(400).json({ message: validateId.error.details.map(item => item.message) })
  return next()
}

const addSiswaSchema = Joi.object({
  email: Joi.string().pattern(/^[a-zA-Z0-9._%+-]+_32rpl@student\.smktelkom-mlg\.sch\.id$/).required(),
  password: Joi.string().min(8).required(),
  nama: Joi.string().required(),
  no_telp: Joi.string().required(),
  no_absen: Joi.number().positive().min(1).max(35).required()
})

const addSiswaValidation = async (req: Request, res: Response, next: NextFunction) => {
  const validate = addSiswaSchema.validate(req.body)
  if (validate.error) return res.status(400).json({ message: validate.error.details.map(item => item.message) })
  return next()
}

const updateSiswaSchema = Joi.object({
  email: Joi.string().pattern(/^[a-zA-Z0-9._%+-]+_32rpl@student\.smktelkom-mlg\.sch\.id$/).optional(),
  password: Joi.string().min(8).optional(),
  nama: Joi.string().optional(),
  no_telp: Joi.string().optional(),
  absen: Joi.number().positive().min(1).max(35).optional()
})

const updateSiswaValidation = async (req: Request, res: Response, next: NextFunction) => {
  const validateId = validateIdSchema.validate(req.params)
  const validate = updateSiswaSchema.validate(req.body)
  if (validateId.error) return res.status(400).json({ message: validateId.error.details.map(item => item.message) })
  if (validate.error) return res.status(400).json({ message: validate.error.details.map(item => item.message) })
  return next()
}

const deleteSiswaValidation = async (req: Request, res: Response, next: NextFunction) => {
  const validateId = validateIdSchema.validate(req.params)
  if (validateId.error) return res.status(400).json({ message: validateId.error.details.map(item => item.message) })
  return next()
}

const pengumumanSchema = Joi.object({
  description: Joi.string().required()
})

const validateAddPengumuman = async (req: Request, res: Response, next: NextFunction) => {
  const validate = pengumumanSchema.validate(req.body)
  if (validate.error) return res.status(400).json({ message: validate.error.details.map(item => item.message) })
  return next()
}

const updatePengumumanSchema = Joi.object({
  description: Joi.string().optional()
})

const validateUpdatePengumuman = async (req: Request, res: Response, next: NextFunction) => {
  const validateId = validateIdSchema.validate(req.params)
  const validate = updatePengumumanSchema.validate(req.body)
  if (validateId.error) return res.status(400).json({ message: validateId.error.details.map(item => item.message) })
  if (validate.error) return res.status(400).json({ message: validate.error.details.map(item => item.message) })
  return next()
}

const validateDeletePengumuman = async (req: Request, res: Response, next: NextFunction) => {
  const validateId = validateIdSchema.validate(req.params)
  if (validateId.error) return res.status(400).json({ message: validateId.error.details.map(item => item.message) })
  return next()
}


export {
  validateAddGuru, validateUpdateGuru, validateDeleteGuru,
  validateAddTugas, validateUpdateTugas, validateDeleteTugas,
  validateAddEvent, validateUpdateEvent, validateDeleteEvent,
  validateAddJadwal, validateUpdateJadwal, validateDeleteJadwal,
  addSiswaValidation, updateSiswaValidation, deleteSiswaValidation,
  validateAddPengumuman, validateUpdatePengumuman, validateDeletePengumuman
}
