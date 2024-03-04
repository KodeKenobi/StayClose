import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import multer from "multer";

import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password, surname, dateOfBirth } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const formattedDateOfBirth = new Date(dateOfBirth).toISOString();

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
      surname,
      dateOfBirth: formattedDateOfBirth,
    },
  });

  return NextResponse.json(user);
}
