"use server";
import prisma from "@/database/prisma";

export async function createUser(formData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    formData.forEach((value, key) => {
      formData.set(key, ""); // Define o valor do campo para vazio
    });

    if (name && email && password) {
      await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: password,
        },
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}
