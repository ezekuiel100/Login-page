"use client";
import { createUser } from "@/actions/actions";
import { useRef } from "react";

function Form() {
  const ref = useRef(null);

  return (
    <form
      ref={ref}
      className="flex flex-col w-80"
      action={async (formData) => {
        ref.current?.reset();

        await createUser(formData);
      }}
    >
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
  );
}

export default Form;
