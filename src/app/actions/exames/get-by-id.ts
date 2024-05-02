'use server'

export async function getById(id:number) {
    const resp = await fetch (`${process.env.API_BASE_URL}/explorar/exames/${id}`, {next: {revalidate: 0}})

    if(!resp.ok){
        throw new Error("registro não encontrado")
    }

    return await resp.json()
}