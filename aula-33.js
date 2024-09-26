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
    idade: 40,
},{
    nome: 'Neil degrasse taison',
    idade: 60,
},{
    nome: 'Tin berners lee',
    idade: 62,
}]


const resultadoSome = lista.some((lista) => lista.idade < 50)
const resultadoEvery = lista.every((lista) => lista.idade < 550 )


console.log(resultadoSome)
console.log(resultadoEvery)