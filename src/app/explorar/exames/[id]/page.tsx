import { getById } from "@/app/actions/exames/get-by-id";
import SideBar from "@/components/SideBar";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { EditForm } from "./EditForm";

export default async function EditarExame({params}:Params) {
    const { id } = params

    const exames: Exame = await getById(id)

    return(
        <>
            <SideBar active="explorar"/>
            <main className="ml-64 flex-1 p-8 min-h-screen flex flex-col justify-between">
                <EditForm {...exames}/>
                
            </main>
        </>
    )
}