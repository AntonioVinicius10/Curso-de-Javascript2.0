const lista = [{
    nome: 'Antonio',
    idade: 24,
},
{
    nome: 'Breno masi',
    idade: 35,
}]

let soma = 0;

/*for (let i = 0; i < lista.length; i++){
    soma += lista[i].idade
}*/

const somaDaIdade = (lista) => {
    soma += lista.idade
}

lista.forEach(somaDaIdade)


console.log('soma', soma)