'use server'

export async function getPerfil(id:number) {
    const resp = await fetch (`${process.env.API_BASE_URL}/perfil/${id}`, {next: {revalidate: 0}})

    if(!resp.ok){
        throw new Error("registro não encontrado")
    }

    return await resp.json()
}