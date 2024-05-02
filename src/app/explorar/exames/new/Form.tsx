'use client'

import { create } from "@/app/actions/exames/create"
import { SubmitButton } from "@/components/SubmitButton"
import { Button, Input, Link } from "@nextui-org/react"
import { useFormState } from "react-dom"

const initialState = {
    message_nome: '',
    message_data: '',
    message_horario: '',
    message_localizacao: '',
}

export function Form(props: { usuario: Usuario }) {

    const { usuario } = props

    const [state, formAction] = useFormState(create, initialState)

    return (
        <div className="flex justify-center items-center h-screen max-w-lg mx-auto ">
            <form action={formAction} className="max-w-lg mx-auto p-8 bg-slate-900 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Novo Registro</h2>
                <input type="hidden" name="usuario" value={usuario.id} />
                <div className="mb-4">
                    <Input
                        key="nome"
                        type="text"
                        label="Descrição"
                        name="nome"
                        labelPlacement={"outside"}
                        placeholder="Nome do exame ou consulta"
                        isRequired={true}
                        isInvalid={state?.message_nome != ''}
                        errorMessage={state?.message_nome}
                    />
                </div>

                <div className="mb-4">
                    <Input
                        key={"data"}
                        type="date"
                        label="Data"
                        labelPlacement={"outside"}
                        name="data"
                        isRequired={true}
                        isInvalid={state?.message_data != ''}
                        errorMessage={state?.message_data}
                    />
                </div>

                <div className="mb-4">
                    <Input
                        key={"horario"}
                        type="time"
                        label="Horário"
                        labelPlacement={"outside"}
                        name="horario"
                        isRequired={true}
                        isInvalid={state?.message_horario != ''}
                        errorMessage={state?.message_horario}
                    />
                </div>

                <div className="mb-4">
                    <Input
                        key={"localizacao"}
                        type="text"
                        name="localizacao"
                        label="Localização"
                        labelPlacement={"outside"}
                        placeholder="Local do exame ou consulta"
                        isRequired={true}
                        isInvalid={state?.message_localizacao != ''}
                        errorMessage={state?.message_localizacao}
                    />
                </div>

                <div className="flex justify-around mt-4">
                    <Link href="/explorar/exames">
                        <Button variant="bordered" className="mr-4">cancelar</Button>
                    </Link>
                    <SubmitButton />
                </div>
            </form>
        </div>
    )
}