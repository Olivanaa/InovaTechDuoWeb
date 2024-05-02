import ModalComponentAlimentacao from "@/components/ModalComponentAlimentacao";
import SideBar from "@/components/SideBar";

export default function Alimentacao() {
    return (
        <main className="main-content ml-64 flex  min-h-screen flex-col items-center">
        <SideBar active="explorar" />
          <div className="flex items-center justify-between w-full px-40 mt-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Alimentação</h1>
     
            <ModalComponentAlimentacao/>
            
         </div>
          
       </main>
    );
  }