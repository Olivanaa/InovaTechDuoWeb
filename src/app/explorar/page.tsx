
import { categorias } from "../utils/categorias";
import SideBar from "@/components/SideBar";
import { ExplorarItem } from "./ExplorarItem";



export default function Explorar() {

  return (
    <main className="main-content ml-64 flex min-h-screen flex-col items-center">
      <SideBar active="explorar" />
      <div className="flex items-center justify-between w-full px-40 mt-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Explorar</h1>
      </div>
      <section className="bg-slate-700 rounded min-w-[800px] p-5 m-5 hover:bg-slate-900">
      <div>
            {categorias.map(categoria => (
                <ExplorarItem key={categoria.id} categoria={categoria} />
            ))}
        </div>
      </section>
    </main>
  );
}
