/*
  Warnings:

  - You are about to drop the `IndividualClient` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'INDIVIDUAL_CLIENT', 'BUSINESS_CLIENT', 'SELLER');

-- DropTable
DROP TABLE "IndividualClient";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "companyName" TEXT,
    "nip" TEXT,
    "role" "Role" NOT NULL DEFAULT E'INDIVIDUAL_CLIENT',
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
