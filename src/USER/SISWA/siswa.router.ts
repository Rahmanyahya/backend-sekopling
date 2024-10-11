// SiswaRouter.js
import { Router } from "express";
import { allowedRole, cekJwt } from "../../AUTHO/cekJwt";
import { getEventController, getKasController, getMapelController, getTugasController, getUserProfileController, updateProfileController } from "./siswa.controller";
import { uploadProfileImage } from "../../utils/upload-pp";
import { validationProfileUpdate } from "./siswa.validation";

class SiswaRouter {
    public router;

    // plug and play router
    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }
    
    // parrent router
    initializeRoutes() {
        this.router.get('/kas', [cekJwt, allowedRole('Ketua', 'Wakil', 'Bendahara', 'Sekertaris', 'Siswa')], getKasController);
        this.router.get('/tugas', [cekJwt, allowedRole('Ketua', 'Wakil', 'Bendahara', 'Sekertaris', 'Siswa')], getTugasController);
        this.router.get('/event', [cekJwt, allowedRole('Ketua', 'Wakil', 'Bendahara', 'Sekertaris', 'Siswa')], getEventController);
        this.router.get('/mapel', [cekJwt, allowedRole('Ketua', 'Wakil', 'Bendahara', 'Sekertaris', 'Siswa')], getMapelController);
        this.router.get('/profile', [cekJwt, allowedRole('Ketua', 'Wakil', 'Bendahara', 'Sekertaris', 'Siswa')], getUserProfileController);
        this.router.put('/', [cekJwt, allowedRole('Ketua', 'Wakil', 'Bendahara', 'Sekertaris', 'Siswa'), uploadProfileImage, validationProfileUpdate], updateProfileController);
    }

    // expose router
    getRouter() {
        return this.router;
    }
}

export default SiswaRouter;
