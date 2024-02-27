"use client";
import { createUser } from "@/actions/actions";
import { useRef } from "react";
import Button from "@/components/button";
import { redirect } from "next/navigation";

function Form() {
  const ref = useRef(null);

  return (
    <form
      ref={ref}
      className="flex flex-col w-80"
      action={async (formData) => {
        ref.current?.reset();

        await createUser(formData);
        redirect("/");
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
      <Button />
    </form>
  );
}

export default Form;
