import Logout from "@/components/logout";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Adm() {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="">
        <p className="text-2xl">Bem vindo, {session.user.name} </p>
        <Logout />
      </div>
    </div>
  );
}

export default Adm;
