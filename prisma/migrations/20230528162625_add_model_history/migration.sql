-- CreateTable
CREATE TABLE "history" (
    "id" SERIAL NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "nik" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "pegawai" TEXT NOT NULL,
    "keterangan" TEXT NOT NULL,

    CONSTRAINT "history_pkey" PRIMARY KEY ("id")
);
