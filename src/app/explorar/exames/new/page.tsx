import { getExames } from "@/app/actions/exames/get";
import SideBar from "@/components/SideBar";
import { Form } from "./Form";
import { getPerfil } from "@/app/actions/usuario/get";



export default async function CadastrarExame() {

    const usuario = await getPerfil(1)

    return(
        <>
            <SideBar active="explorar"/>
            <main className="ml-64 flex-1 p-8 min-h-screen flex flex-col justify-between">
                <Form usuario ={usuario} />
            </main>
        </>
    )
    
}