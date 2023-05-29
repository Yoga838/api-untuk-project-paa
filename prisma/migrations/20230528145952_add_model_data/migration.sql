-- CreateTable
CREATE TABLE "data" (
    "id" SERIAL NOT NULL,
    "nik" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "tanggal_lahir" TIMESTAMP(3) NOT NULL,
    "tempat_lahir" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "anak_ke" TEXT NOT NULL,
    "jumlah_saudara" TEXT NOT NULL,
    "pendidikan" TEXT NOT NULL,
    "nama_ayah" TEXT NOT NULL,
    "nama_ibu" TEXT NOT NULL,
    "kondisi" TEXT NOT NULL,

    CONSTRAINT "data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "data_nik_key" ON "data"("nik");
