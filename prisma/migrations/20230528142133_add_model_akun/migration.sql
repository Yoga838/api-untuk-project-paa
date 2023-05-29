-- CreateTable
CREATE TABLE "akun" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "provinsi" TEXT NOT NULL,
    "kabupaten" TEXT NOT NULL,
    "kecamatan" TEXT NOT NULL,
    "desa" TEXT NOT NULL,
    "kode_pos" TEXT NOT NULL,
    "alamat_kantor" TEXT NOT NULL,

    CONSTRAINT "akun_pkey" PRIMARY KEY ("id")
);
