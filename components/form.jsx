"use client";
import { createUser } from "@/actions/actions";
import { useRef, useState } from "react";
import Button from "@/components/button";

function Form() {
  const ref = useRef(null);
  const [error, setError] = useState(null);

  return (
    <form
      ref={ref}
      className="flex flex-col w-80"
      action={async (formData) => {
        try {
          let res = await createUser(formData);
          setError(res);
        } catch (error) {
          console.log(error.message);
        }
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
      {error && (
        <span className="text-sm text-center mt-2 text-red-500">
          {error.error}
        </span>
      )}
      <Button>Register</Button>
    </form>
  );
}

export default Form;
