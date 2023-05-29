/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `akun` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "akun_email_key" ON "akun"("email");
