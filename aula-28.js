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




const filtarLista = (lista) => {
    return lista.idade > 20 
}

const listaFiltrada = lista.filter(filtarLista)



//const listaFitrada = lista.filter((lista) => lista.idade > 25 )

console.log(listaFiltrada)