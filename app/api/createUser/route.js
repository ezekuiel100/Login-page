import prisma from "@/database/prisma";

export async function POST(req, res) {
  try {
    const { name, email, password } = await req.json();

    if (name && email && password) {
      await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: password,
        },
      });
    }

    return res.status(201);
  } catch (error) {
    return Response.json({ error });
  }
}
