"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  let [pending, setPending] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setPending(true);

    const formData = new FormData(event.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    signIn("credentials", {
      ...data,
      callbackUrl: "/adm",
    });
  }

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="w-80">
        <h1 className="font-bold text-xl text-center mb-10">
          Sign in to your account
        </h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="focus:bg-blue-100 outline-none border border-gray-400 p-2 border-b-0 text-sm"
            required
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="focus:bg-blue-100 outline-none border border-gray-400 p-2 text-sm"
            required
          ></input>
          <div className="text-right">
            <Link
              href="/register"
              className="text-sm text-blue-600 font-medium "
            >
              Create account
            </Link>
          </div>

          <button
            disabled={pending}
            className="bg-blue-500 rounded-lg text-white text-sm mt-2 p-1 disabled:bg-blue-300"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}
