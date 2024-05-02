"use server"

import { redirect } from "next/navigation"

export async function create(prevState: any, formData: FormData){
  await new Promise(r => setTimeout(r, 3000))

  const date = formData.get("data");
  const partes = String(date).split('-');
  formData.set("data", partes[2] + '/' + partes[1] + '/' + partes[0]);
  
  const data = {
    nome: formData.get("nome"),
    data: formData.get("data"),
    horario: formData.get("horario"),
    localizacao: formData.get("localizacao"),
    usuario: {
      id:formData.get("usuario")
    }

  };

  console.log(data);
  
   

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }

  const resp = await fetch(`${process.env.API_BASE_URL}/explorar/exames`, options)

  if (resp.status == 201) redirect("/explorar/exames")

  if(resp.status == 400){
    const messages = await resp.json()

    return{
      message_nome: messages.find( (e:any) => e.nome == "nome")?.mensagem || "",
      message_data: messages.find( (e:any) => e.data == "data")?.mensagem || "",
      message_horario: messages.find( (e:any) => e.horario == "horario")?.mensagem || "",
      message_localizacao: messages.find( (e:any) => e.localizacao == "localizacao")?.mensagem || "",
    }
  }
}
