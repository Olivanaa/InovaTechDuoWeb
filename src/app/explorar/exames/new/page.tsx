import { getExames } from "@/app/actions/exames/get";
import SideBar from "@/components/SideBar";
import { Form } from "./Form";
import { getPerfil } from "@/app/actions/usuario/get";



export default async function CadastrarExame() {

    const usuario = await getPerfil(1)

    return(
        <main className="flex min-h-screen flex-col items-center">
            <SideBar active="explorar"/>

            <Form usuario ={usuario} />
        </main>
    )
    
}