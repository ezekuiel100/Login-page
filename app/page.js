"use client";
import { signIn } from "next-auth/react";

export default function Home() {
  function handleSubmit(event) {
    event.preventDefault();
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
      <div className="w-72">
        <h1 className="font-bold text-xl text-center mb-10">
          Sign in to your account
        </h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="focus:bg-blue-100 outline-none border border-gray-400 p-2 border-b-0 text-sm"
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="focus:bg-blue-100 outline-none border border-gray-400 p-2 text-sm"
          ></input>
          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 font-medium ">
              Forgot your password?
            </a>
          </div>
          <button className="bg-blue-500 rounded-lg text-white text-sm mt-2 p-1">
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}
