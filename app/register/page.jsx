"use client";
import { handleSubmit } from "@/database/prisma";

function Register() {
  async function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let name = formData.get("name");
    let email = formData.get("email");
    let password = formData.get("password");

    await fetch("http://localhost:3000/api/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-2xl font-bold text-center mb-10">Create Accout</h1>
        <form className="flex flex-col w-80" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="focus:bg-blue-100 outline-none border border-gray-400 p-2  text-sm"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="focus:bg-blue-100 outline-none border border-gray-400 p-2  text-sm mt-4"
            required
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="focus:bg-blue-100 outline-none border border-gray-400 p-2 text-sm mt-4"
            required
          ></input>
          <div className="text-right"></div>
          <button className="bg-blue-500 rounded-lg text-white text-sm mt-4 p-1">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
