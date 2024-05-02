'use server'

import { redirect } from "next/navigation"

export async function update(prevState:any, formData:FormData) {

    const data ={
        nome: formData.get('nome'),
        data: formData.get('data'),
        horario: formData.get('horario'),
        localizacao: formData.get('localizacao'),
    }

    const response = await fetch(`${process.env.API_BASE_URL}/explorar/exames/${formData.get('id')}`,{
        method: 'PUT',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok){
        return{
            messageNome: 'Erro ao atualizar'
        }
    }

    if(response.ok){
        redirect('/explorar/exames')
    }
}