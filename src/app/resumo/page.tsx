import SideBar from "@/components/SideBar";

export default function Resumo() {
    return (
      <main className="flex min-h-screen flex-col items-center">
        <SideBar active="resumo" />
        <h1 className="text-4xl font-bold text-slate-900 my-4 ">Resumo</h1>
      </main>
    );
  }