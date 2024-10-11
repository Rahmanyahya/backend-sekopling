import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

const loginValidation = (req: Request, res: Response, next: NextFunction) => {
    const validate = loginSchema.validate(req.body)

    if (validate.error) return res.status(400).json({message: validate.error.details.map(item => item.message)})

    return next()
}

export {loginValidation}