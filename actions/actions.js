"use server";
import prisma from "@/database/prisma";
import bcrypt from "bcrypt";

const saltRounds = 10;

export async function createUser(formData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const hash = bcrypt.hashSync(password, saltRounds);

    if (name && email && hash) {
      await prisma.user.create({
        data: {
          name,
          email,
          password: hash,
        },
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}
