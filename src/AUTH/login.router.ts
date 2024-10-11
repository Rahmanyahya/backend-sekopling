import { Router } from "express"
import {loginController} from "./login.controller"
import {loginValidation} from "./login.validation"
const router = Router()

router.post('/Login', loginValidation ,loginController)

