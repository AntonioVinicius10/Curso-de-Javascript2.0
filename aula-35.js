class Pessoa {
    nome;
    idade;
    amigos;

    quantosAmigos() {
        if (this.amigos) {
            return this.amigos.length
        }
        return 0 
    }

    constructor(nome, idade, amigos, /*amigosNovos*/) {
        this.nome = nome;
        this.idade = idade;
        this.amigos = amigos
       /* this.amigosNovos = amigosNovos*/
    }
}


const amigo1 = new Pessoa('fabio Akita', 40, 'serjo')
const amigo2 = new Pessoa('Tim Berners Lee', 51, 'serjo')
const amigo3 = new Pessoa('Steve lobs', 61, 'sergio')
const pessoa = new Pessoa('Serjo', 39, /*'Tim berners lee'*/  [amigo1, amigo2]);
//pessoa.amigos = []
//console.log(amigo1)
console.log(pessoa)
//console.log(pessoa.quantosAmigos())
//console.log('Quantos Amigos tem?', amigo1.quantosAmigos())