'use client'

import { update } from "@/app/actions/exames/update";
import { SubmitButton } from "@/components/SubmitButton";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useFormState } from "react-dom";



const initialState = {
    messageNome: '',
}

export function EditForm(exame: Exame) {
    const [state, formAction] = useFormState(update, initialState)

    return (
        <div className="flex justify-center items-center h-screen max-w-lg mx-auto ">
            <form action={formAction} className="max-w-lg mx-auto p-8 bg-slate-900 rounded shadow-lg">
                <input type="hidden" name="id" value={exame.id} />
                <h2 className="text-2xl font-bold mb-4">Editar Registro</h2>
                <input type="hidden" name="exame" value={exame.id} />
                <div className="mb-4">
                    <Input
                        key="nome"
                        label="Descrição"
                        name="nome"
                        labelPlacement={"outside"}
                        defaultValue={exame.nome}
                        isInvalid={state?.messageNome != ''}
                        errorMessage={state?.messageNome}
                    />
                </div>

                <div className="mb-4">
                    <Input
                        key={"data"}
                        type="date"
                        label="Data"
                        labelPlacement={"outside"}
                        name="data"
                        defaultValue={exame.data}
                        isInvalid={state?.messageNome != ''}
                        errorMessage={state?.messageNome}
                    />
                </div>               

                <div className="mb-4">
                    <Input
                        key={"horario"}
                        type="time"
                        label="Horário"
                        labelPlacement={"outside"}
                        name="horario"
                        defaultValue={exame.horario}
                        isInvalid={state?.messageNome != ''}
                        errorMessage={state?.messageNome}
                    />
                </div>
                
                <div className="mb-4">
                    <Input
                        key={"localizacao"}
                        name="localizacao"
                        label="Localização"
                        labelPlacement={"outside"}
                        defaultValue={exame.localizacao}
                        isInvalid={state?.messageNome != ''}
                        errorMessage={state?.messageNome}
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