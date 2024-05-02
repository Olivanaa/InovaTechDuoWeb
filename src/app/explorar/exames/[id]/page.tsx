import { getById } from "@/app/actions/exames/get-by-id";
import SideBar from "@/components/SideBar";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { EditForm } from "./EditForm";

export default async function EditarExame({params}:Params) {
    const { id } = params

    const exames: Exame = await getById(id)

    return(
        <main className="flex min-h-screen flex-col items-center ">
            <SideBar active="explorar"/>

            <EditForm {...exames}/>
        </main>
    )
}