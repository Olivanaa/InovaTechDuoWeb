'use client'
import { Button } from "@nextui-org/react"
import Link from "next/link"
import { useRouter } from "next/navigation"


interface UsuarioItemProps {
    usuario: Usuario
}

export function UsuarioItem(props: UsuarioItemProps) {
    const router = useRouter()
    const { usuario } = props

    return (
        <div>
            <section className="bg-indigo-950 rounded min-w-[500px] p-6 ">
                <div key={usuario.id} className="flex gap-1 items-center">
                    <p>{usuario.nome}</p>
                    <p>{usuario.dtaNascimento}</p>
                    <p>{usuario.genero}</p>
                    <p>{usuario.email}</p>

                </div>
                <Link href="/">
                    <Button onClick={() => router.push(`/perfil/${usuario.id}/edit`)}>Alterar Dados</Button>
                </Link>

            </section>
        </div>
    )
}