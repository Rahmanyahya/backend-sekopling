import wakilRouter from "../WAKIL/wakil.router";
import { createEntityController, deleteEntityController, getAllEntitiy, updateEntityController } from './ketua.controller';
import { cekJwt, allowedRole } from "../../AUTHO/cekJwt";
import { addEntityValidation, deleteEntityValidation, updateEntityValidation } from './ketua.validation';
import bendaharaRouter from "../BENDAHARA/bendahara.router";

class ketuaRouter extends wakilRouter {
    private bendaharaRouterInstance: bendaharaRouter; // Mengubah nama variabel untuk menghindari kebingungan

    constructor() {
        super();
        this.bendaharaRouterInstance = new bendaharaRouter(); // Inisialisasi di sini
        this.ketuaRouter(); // Panggil metode setelah inisialisasi bendaharaRouter
    }

    ketuaRouter() {
        this.router.use('/bendahara', this.bendaharaRouterInstance.getRouter()); // Menggunakan instance yang sudah diinisialisasi

        // Rute lainnya
        this.router.post('/', cekJwt, allowedRole("Ketua"), addEntityValidation, createEntityController);
        this.router.put('/:id', cekJwt, allowedRole("Ketua"), updateEntityValidation, updateEntityController);
        this.router.get('/', cekJwt, allowedRole("Ketua"), getAllEntitiy);
        this.router.delete('/:id', cekJwt, allowedRole("Ketua"), deleteEntityValidation, deleteEntityController);
    }
}

export default ketuaRouter;
