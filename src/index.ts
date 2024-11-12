import Express  from "express";
import siswaRouter from './USER/SISWA/siswa.router'
import bendaharaRouter from "./USER/BENDAHARA/bendahara.router";
import sekertarisRouter from "./USER/SEKERTARIS/sekertaris.router";
import wakilRouter from "./USER/WAKIL/wakil.router";
import ketuaRouter from "./USER/KETUA/ketua.router";
import cookieParser from "cookie-parser";
import Login from "./AUTH/login.router"
import cors from "cors"


const app = Express()

app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: true
}))
app.use(cookieParser())
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))

const siswa = new siswaRouter()
const bendahara = new bendaharaRouter()
const sekertaris = new sekertarisRouter()
const wakil = new wakilRouter()
const ketua = new ketuaRouter()

app.use('/api/siswa', siswa.getRouter())
app.use('/api/wakil', wakil.getRouter())
app.use('/api/bendahara', bendahara.getRouter())
app.use('/api/sekertaris', sekertaris.getRouter())
app.use('/api/ketua', ketua.getRouter())
app.use('/api/login',Login)

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
})