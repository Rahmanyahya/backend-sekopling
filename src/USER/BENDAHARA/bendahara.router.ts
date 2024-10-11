import express from 'express';
import siswaRouter from "../SISWA/siswa.router"; 
import { cekJwt, allowedRole } from "../../AUTHO/cekJwt"; 
import { addKasController, deleteKasController, getKasController, updateKasController } from "./bendahara.controller"; 
import { validateDeleteTransaction, validateReadTransaction, validateTransaction, validateUpdateTransaction } from './bendahara.validation';

class bendaharaRouter extends siswaRouter {
    router: express.Router;

    constructor() {
        super(); // Memanggil super() terlebih dahulu
        this.router = express.Router(); // Membuat instance router baru
        this.bendaharaRouter(); 
    }

    bendaharaRouter() {
        this.router.post('/kas', cekJwt, allowedRole("Bendahara", "Ketua"), validateTransaction, addKasController);
        this.router.put('/kas/:id', cekJwt, allowedRole("Bendahara", "Ketua"), validateUpdateTransaction, updateKasController);
        this.router.delete('/kas/:id', cekJwt, allowedRole("Bendahara", "Ketua"), validateDeleteTransaction, deleteKasController);
        this.router.get('/kas/filter', cekJwt, allowedRole("Bendahara", "Ketua"), validateReadTransaction, getKasController);
    }

    getRouter() {
        return this.router; // Mengembalikan instance router
    }
}

export default bendaharaRouter;
