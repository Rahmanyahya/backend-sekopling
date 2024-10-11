import bendaharaRouter from "../BENDAHARA/bendahara.router";
import sekertarisRouter from "../SEKERTARIS/sekertaris.router";
import SiswaRouter from "../SISWA/siswa.router";

class wakilRouter extends sekertarisRouter {

    constructor () {
        super();
        this.wakilRouter();
    }

    wakilRouter() {}
    
}

export default wakilRouter