
import SideBar from "@/components/SideBar";
import { Button, Card, CardBody, CardHeader, Skeleton } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { title } from "process";
import { getPerfil } from "../../actions/usuario/get";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { UsuarioItem } from "../PerfilItem";



export default async function Perfil({params}: Params) {

  const { id } = params


  const dados = {
    title: "",
    value: ""
  }
  const ultimo_exame = {
    title: "",
    value: ""
  }
  const ultimo_sono = {
    title: "",
    value: ""
  }
  const ultimo_ali = {
    title: "",
    value: ""
  }
  const ultimo_atv = {
    title: "",
    value: ""
  }

  const usuario: Usuario = await getPerfil(id)
  // const ultimasMovimentacoes: Movimentacao[] = await getUltimas()
  // const ultimasMovimentacoes: Movimentacao[] = await getUltimas()
  // const ultimasMovimentacoes: Movimentacao[] = await getUltimas()
  // const ultimasMovimentacoes: Movimentacao[] = await getUltimas()

  return (
    <>
      <SideBar active="perfil" />
      <main className="ml-64 flex p-8 min-h-screen flex-col justify-between">
        <h1 className="text-4xl font-bold text-slate-900 my-4 ">Perfil</h1>
        <div className="flex" id="data">
          <UsuarioItem usuario={usuario} />
        </div>
          <p>Ultimos registros</p>
        <section className="flex p-6 m4 ">
          <div>
            <Card className="py-4 min-w-[300px]">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Alimentação</p>
              </CardHeader>
              <CardBody className="overflow-visible py-2">


              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="py-4 min-w-[300px]">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Sono</p>
              </CardHeader>
              <CardBody className="overflow-visible py-2">

              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="py-4 min-w-[300px]">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Atividade Física</p>
              </CardHeader>
              <CardBody className="overflow-visible py-2">

              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="py-4 min-w-[300px]">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Exames</p>
              </CardHeader>
              <CardBody className="overflow-visible py-2">

              </CardBody>
            </Card>
          </div>

        </section>
      </main>
    </>
  );
}