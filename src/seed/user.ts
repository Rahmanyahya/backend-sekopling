import bcrypt from "bcrypt"
import {PrismaClient} from "@prisma/client"

const Prisma = new PrismaClient()

async function main () {
    await Prisma.siswa.create({
        data: {
            nama: "yahya",
            absen: 35,
            email: "halo123@gmail.com",
            jabatan: "Ketua",
            no_telp: "089697094939",
            password: await bcrypt.hash("halo123", 10),
            photo: ""
        }
    })
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await Prisma.$disconnect();
    });