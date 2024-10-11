import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { deleteImage } from "../../utils/deletePhoto";

const updateProfileSchema = Joi.object({
   email: Joi.string().email().optional().allow(''),
   no_telp: Joi.string().optional().allow('')
})

const validationProfileUpdate = (req: Request, res: Response, next: NextFunction) => {
    const validate = updateProfileSchema.validate(req.body)
    if (req.file != undefined)  {
        if (req.file.filename == "" || req.file.filename == null) return res.status(401).json({message: "File not allowed"}) 
        deleteImage(req.file.filename)
    }
    if (validate.error) return res.status(400).json({message: validate.error.details.map(item => item.message)})
        return next()
}

export { validationProfileUpdate }