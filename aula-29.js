const lista = [{
    nome: 'Antonio',
    idade: 24,
}, {
    nome: 'Breno masi',
    idade: 35,
},{
    nome: 'Fabio Akita',
    idade: 40,
}, {
    nome: 'Serjão',
    idade: 39,
}]


const buscarNaLista = (busca) => {
    return busca.nome === 'Breno masi'
}

const novalista = lista.find(buscarNaLista)

//const novalista = lista.find((busca) => busca.nome === 'Antonio')

console.log(novalista)