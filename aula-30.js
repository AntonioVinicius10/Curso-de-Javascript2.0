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

const funcaoReduce = (acc, object) => {
    return {
        ...acc,
        [object.nome]: {
            idade: object.idade
        }
            
    }
}

const listaNova = lista.reduce(funcaoReduce, {
    Julio: {
        idade: 29
    },
        Caio: {
            idade: 30
        }
    }
)
const listaArray = lista.reduce((acc, object) =>{
    acc.push(object.idade);
    return acc;
},[]);

console.log(listaNova)
console.log(listaArray)