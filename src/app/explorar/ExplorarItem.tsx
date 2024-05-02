import { Icon } from "@/components/Icon";
import { ChevronDown, Utensils } from "lucide-react";
import Link from "next/link";

interface ExplorarItemProps {
    categoria: {
        id: number,
        nome: string,
        icone: string,
        path : string
    }
}

export function ExplorarItem(props: ExplorarItemProps){
    const { categoria } = props
    return (
        <div key={categoria.id} className="flex justify-between py-2" id="data-row">
            <div className="flex gap-1 items-center ">
                <Icon name={categoria.icone} />
                <Link href={`/explorar/${categoria.path}`}>
                    <span className="ml-4">{categoria.nome}</span>
                </Link>
            </div>
           
            
        </div>
    )
}