import prisma from "../DATABASE/db";

const loginRepository = async (email: string) => {
  return await prisma.siswa.findFirst({
    where: { email },
  })
}

export {loginRepository}