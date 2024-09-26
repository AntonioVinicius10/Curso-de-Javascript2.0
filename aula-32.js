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

lista.sort((a, b) => {
    if (a.idade < b.idade){
        return -1 
    }
    if (a.idade > b.idade) {
        return 1
    }
    return 0
})

// por ordem alfabetica

lista.sort((a,b) =>{
    if (a.idade < b.idade) {
        return -1 
    }
    if (a.idade > b.idade) {
        return 1
    }
})


console.log(lista)