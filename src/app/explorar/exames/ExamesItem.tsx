'use client'

import { destroy } from "@/app/actions/exames/destroy";
import { DropDownActions } from "@/components/DropDownActions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface ExamesItemProps {
    exame : Exame
}

export function ExamesItem({ exame } : ExamesItemProps){
    const router = useRouter()

   function handleDelete(){
        toast.promise(
            destroy(exame.id),
            {
                loading: 'excluindo...',
                success:'Exluido com sucesso',
                error:'Erro ao excluir'
            },
            
        )
    }

    return (
        <div key={exame.id} className="flex justify-between py-2" id="data-row">
            <div className="flex gap-1 items-center ">
                <span className="ml-4">{exame.nome}</span>
                <span className="ml-4">{exame.data}</span>
                <span className="ml-4">{exame.horario}</span>
                <span className="ml-4">{exame.localizacao}</span>
            </div>
            <DropDownActions 
                onExplorar={() => router.push(`/explorar/exames/${exame.id}`)}
                onDelete={handleDelete}
            />
        </div>
    )
}