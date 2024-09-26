const lista = [{
    nome: 'Antonio',
    idade: 24,
    cartões: [5441, 7644],
}, {
    nome: 'Breno masi',
    idade: 35,
    cartões: [6547, 2824],
},{
    nome: 'Fabio Akita',
    idade: 40,
    cartões: [9854, 2658],
}, {
    nome: 'Serjão',
    idade: 40,
    cartões: [9874, 2828],
},{
    nome: 'Neil degrasse taison',
    idade: 60,
    cartões: [7385, 7288],
},{
    nome: 'Tin berners lee',
    idade: 62,
    cartões: [8238, 7282],
}]

const cartoes = lista.flatMap((lista) => lista.cartões)

console.log(cartoes[0])

if (cartoes[1] === 5441){
    console.log('Seu cartão é master card ')
} else {
    console.log('Não é master card')
}