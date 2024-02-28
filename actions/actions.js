"use server";
import prisma from "@/database/prisma";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

import { z } from "zod";

const User = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(4),
});

const saltRounds = 10;

export async function createUser(formData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const data = { name, email, password };

    const user = User.safeParse(data);

    if (!user.success) {
      return;
    }

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
  redirect("/");
}
