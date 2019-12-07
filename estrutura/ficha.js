const Personagem = {
    nome: string,
    conceito: string,
    senda: Classe,
    orientacao: Orientacao,
    ordem: Ordem,
    atributos: [Atributo],
    habilidades: [Habilidade],
    vantagens: [Vantagem]
}

const Classe = {
    tipo: any,
}

const Vicio = {
    tipo: any,
}

const Virtude = {
    tipo: any,
}

const Orientacao = {
    vicio: Vicio,
    virtude: Virtude,
}

const Ordem = {
    tipo: any
}

const Atributo = {
    nome: any,
    nivel: number
}

const Habilidade = {
    nome: any,
    nivel: number,
    especializacao: any
}

const Vantagem = {
    nome: any,
    descricao: any,
    custo: any,
    nivel: number
}

