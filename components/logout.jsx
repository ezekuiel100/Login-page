"use client";
import { signOut } from "next-auth/react";

function Logout() {
  return (
    <div>
      <button
        className="bg-blue-500 rounded-lg text-white text-sm py-2 px-4 mx-auto block "
        onClick={signOut}
      >
        Log out
      </button>
    </div>
  );
}

export default Logout;
