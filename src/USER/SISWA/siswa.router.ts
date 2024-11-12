// SiswaRouter.js
import { Router } from "express";
import { allowedRole, cekJwt } from "../../AUTHO/cekJwt";
import { getEventController, getGuruControl, getKasController, getMapelController, getPengumumanController, getTugasController, getUserProfileController, updateProfileController } from "./siswa.controller";
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
    this.router.get('/Guru', getGuruControl)
    this.router.get('/kas', getKasController);
    this.router.get('/tugas', [cekJwt, allowedRole('Ketua', 'Wakil', 'Bendahara', 'Sekertaris', 'Siswa')], getTugasController);
    this.router.get('/event', [cekJwt, allowedRole('Ketua', 'Wakil', 'Bendahara', 'Sekertaris', 'Siswa')], getEventController);
    this.router.get('/mapel', [cekJwt, allowedRole('Ketua', 'Wakil', 'Bendahara', 'Sekertaris', 'Siswa')], getMapelController);
    this.router.get('/profile', [cekJwt, allowedRole('Ketua', 'Wakil', 'Bendahara', 'Sekertaris', 'Siswa')], getUserProfileController);
    this.router.get('/pengumuman', [cekJwt, allowedRole('Ketua', 'Wakil', 'Bendahara', 'Sekertaris', 'Siswa')], getPengumumanController)
    this.router.put('/', [cekJwt, allowedRole('Ketua', 'Wakil', 'Bendahara', 'Sekertaris', 'Siswa'), uploadProfileImage, validationProfileUpdate], updateProfileController);
  }

  // expose router
  getRouter() {
    return this.router;
  }
}

export default SiswaRouter;
