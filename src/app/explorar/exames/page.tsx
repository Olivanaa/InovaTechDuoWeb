import SideBar from "@/components/SideBar";
import { getExames } from "@/app/actions/exames/get";
import { ExamesData } from "./ExamesData";


export default async function Exames() {

  const exames: any = await getExames()

  return (
    <>
      <SideBar active="explorar" />
      <main className="ml-64 flex-1 p-8 min-h-screen flex flex-col justify-between">
        <ExamesData
          exames={exames.content}
        />
      </main>
    </>
  );
}