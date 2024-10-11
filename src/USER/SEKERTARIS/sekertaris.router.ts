import { allowedRole, cekJwt } from "../../AUTHO/cekJwt";
import SiswaRouter from "../SISWA/siswa.router";
import { addGuruController, deleteGuruController, updateGuruController,addEventController,addJadwalController,addTugasController,deleteEventController,deleteJadwalController,deleteTugasController,updateEventController,updateJadwalController,updateTugasController,
    addSiswaController,getAllSiswaController,updateSiswaController,
    deleteSiswaController
 } from "./sekertaris.controller";
import { validateAddGuru, validateDeleteGuru, validateUpdateGuru,validateAddEvent,validateAddJadwal,validateAddTugas,validateDeleteEvent,validateDeleteJadwal,validateDeleteTugas,validateUpdateEvent,validateUpdateJadwal,validateUpdateTugas, addSiswaValidation, updateSiswaValidation, deleteSiswaValidation } from "./sekertaris.validation";

class sekertarisRouter extends SiswaRouter {
    constructor () {
        super();
        this.sekertarisRouter();
    }

    sekertarisRouter() {
        // Guru
        this.router.post('/Guru', cekJwt,allowedRole("Sekertaris","Wakil","Ketua"),validateAddGuru,addGuruController)
        this.router.put('/Guru/:id',cekJwt,allowedRole("Sekertaris","Wakil","Ketua"),validateUpdateGuru,updateGuruController)
        this.router.delete('/Guru/:id', cekJwt,allowedRole("Sekertaris","Wakil","Ketua"),validateDeleteGuru,deleteGuruController)

        // event
        this.router.post('/events', cekJwt,allowedRole("Sekertaris","Wakil","Ketua"),validateAddEvent,addEventController)
        this.router.put('/events/:id',cekJwt,allowedRole("Sekertaris","Wakil","Ketua"),validateUpdateEvent,updateEventController)
        this.router.delete('/events/:id', cekJwt,allowedRole("Sekertaris","Wakil","Ketua"),validateDeleteEvent,deleteEventController)

        // jadwal
        this.router.post('/jadwal', cekJwt,allowedRole("Sekertaris","Wakil","Ketua"),validateAddJadwal,addJadwalController)
        this.router.put('/jadwal/:id',cekJwt,allowedRole("Sekertaris","Wakil","Ketua"),validateUpdateJadwal,updateJadwalController)
        this.router.delete('/jadwal/:id', cekJwt,allowedRole("Sekertaris","Wakil","Ketua"),validateDeleteJadwal,deleteJadwalController)

        // tugas
        this.router.post('/tugas', cekJwt,allowedRole("Sekertaris","Wakil","Ketua"),validateAddTugas,addTugasController)
        this.router.put('/tugas/:id',cekJwt,allowedRole("Sekertaris","Wakil","Ketua"),validateUpdateTugas,updateTugasController)
        this.router.delete('/tugas/:id', cekJwt,allowedRole("Sekertaris","Wakil","Ketua"),validateDeleteTugas,deleteTugasController)

        // siswa
        this.router.post('/siswa', cekJwt,allowedRole("Sekertaris","Wakil","Ketua"),addSiswaValidation,addSiswaController)
        this.router.get('/siswa', cekJwt,allowedRole("Sekertaris","Wakil","Ketua"),getAllSiswaController)
        this.router.put('/siswa/:id',cekJwt,allowedRole("Sekertaris","Wakil","Ketua"),updateSiswaValidation,updateSiswaController)
        this.router.delete('/siswa/:id', cekJwt,allowedRole("Sekertaris","Wakil","Ketua"),deleteSiswaValidation,deleteSiswaController) 
      
    }

    
}

export default sekertarisRouter;