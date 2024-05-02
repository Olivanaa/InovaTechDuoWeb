interface Categoria {

    id: number,
    nome: string,
    icone: string,
    path: string

}

interface Exame {

    id: number,
    data: string,
    nome: string,
    localizacao: string,
    horario: string
    usuario: Usuario

}

interface Usuario { 

    id: number,
    nome: string,
    genero: string,
    dtaNascimento: string, 
    email: string

}