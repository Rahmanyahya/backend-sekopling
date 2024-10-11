/*
  Warnings:

  - You are about to drop the column `email` on the `guru` table. All the data in the column will be lost.
  - You are about to drop the column `nip` on the `guru` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `guru` table. All the data in the column will be lost.
  - You are about to drop the `jam_mengajar` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `mapel` to the `Guru` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `jam_mengajar` DROP FOREIGN KEY `Jam_Mengajar_guruID_fkey`;

-- AlterTable
ALTER TABLE `guru` DROP COLUMN `email`,
    DROP COLUMN `nip`,
    DROP COLUMN `password`,
    ADD COLUMN `mapel` ENUM('RPL', 'MATEMATIKA', 'SEJARAH', 'PKN', 'BAHASA_INDONESIA', 'BK', 'AGAMA', 'TKJ', 'EGLISH_DISCOVERIES', 'BAHASA_JAWA') NOT NULL;

-- DropTable
DROP TABLE `jam_mengajar`;

-- CreateTable
CREATE TABLE `Jadwal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hari` ENUM('Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat') NOT NULL,
    `guruID` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Jadwal` ADD CONSTRAINT `Jadwal_guruID_fkey` FOREIGN KEY (`guruID`) REFERENCES `Guru`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
