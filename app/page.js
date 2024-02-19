import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="w-96">
        <h1 className="font-bold text-xl text-center mb-10">
          Sign in to your account
        </h1>
        <form className="flex flex-col">
          <input
            className="focus:bg-blue-100 outline-none border border-gray-400 p-2 border-b-0 text-sm"
            placeholder="Email address"
          ></input>
          <input
            className="focus:bg-blue-100 outline-none border border-gray-400 p-2 text-sm"
            placeholder="Password"
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
