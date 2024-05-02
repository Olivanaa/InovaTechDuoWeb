
import ModalComponentSono from "@/components/ModalComponentSono";
import SideBar from "@/components/SideBar";

export default function Sono() {
    return (
        <main className="main-content ml-64 flex  min-h-screen flex-col items-center">
        <SideBar active="explorar" />
          <div className="flex items-center justify-between w-full px-40 mt-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Sono</h1>
     
            <ModalComponentSono />
            
         </div>
          
       </main>
    );
  }