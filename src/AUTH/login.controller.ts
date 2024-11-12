import { loginRepository } from "./login.repository"
import { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv/config"

const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    const checkEmail = await loginRepository(email)

    if (!checkEmail) return res.status(404).json({ message: "Your Email is not exist" })

    bcrypt.compare(password, checkEmail.password, (err, _) => {

      if (err) return res.status(400).json({ message: "Your password is wrong" })

      const payload = {
        id: checkEmail.id,
        role: checkEmail.jabatan
      }

      const token = jwt.sign(payload, String(process.env.SECRET_KEY), { expiresIn: "24h" })

      res.cookie("token", token, { httpOnly: true, secure: true })

      return res.status(200).json({ message: "Succes Login", token })
    })
  } catch (error) {
    return res.status(400).json(error)
  }
}

export { loginController }
