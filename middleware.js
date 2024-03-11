import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  try {
    const token = await getToken({ req: request });

    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return null;
  } catch (error) {
    console.log(error.message);
  }
}

export const config = {
  matcher: "adm",
};
