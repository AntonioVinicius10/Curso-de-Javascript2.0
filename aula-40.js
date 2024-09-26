const lista = [{
    nome: 'Antonio',
    idade: 24,
},{
    nome: 'Breno masi',
    idade: 35,
},{
    nome: 'Fabio Akita',
    idade: 40,
},{
    nome: 'Serjão',
    idade: 39,
}]

const novaLista = {
    ...lista,
    final: 'Final'
}




const lista1 = [12, 15, 50]
const lista2 = [33, 74, 94]

const listaJunta = [
    ...lista1, ...lista2
]

let somas = lista1[0] + lista1[1] + lista1[2]

const listaConcat = lista1.concat(lista2)
//console.log(novaLista[0])
console.log(listaJunta)
console.log(listaConcat)
console.log(somas)

