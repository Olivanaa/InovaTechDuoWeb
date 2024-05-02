'use server'

export async function getExames(mes?: number, page?:number) {

    if (!page) page = 1
    page = page - 1

    const queryParam = new URLSearchParams()
    if (mes) queryParam.append('mes', mes.toString())
    queryParam.append('page', page.toString())

    const url = `${process.env.API_BASE_URL}/explorar/exames?${queryParam.toString()}`
    const resp = await fetch(url, { next: { revalidate: 0 } })
    const json = await resp.json()
    console.log(json);
    
    console.log(queryParam);
    console.log(mes);
    
    
    return json


    
    
}