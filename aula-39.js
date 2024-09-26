const propriedadePadrão = (valorInicial) =>({
    value: valorInicial,
    writable: false, // se estiver true => usuario.nome = 'novo nome'
    configurable: false, // se estiver true => posso deletar o nome
    enumerable: true , // se estiver true => ele será exibido no objeto
}
)

class Usuario {
constructor(email, senha, nome) {
Object.defineProperties(this, {
    nome: {
        get: () => nome,
        set: (value) => nome = value
    },
    senha: {
        get: () => senha,
        set: (value) => {
            if (senha.length > 4){
                throw new TypeError('Você precisa de mais que 4 letras')
            }
            senha = value
        } 

    },
    email: {
        get: () => email,
        set: () => email = value 
    }
})
}
}

const usuario1 = new Usuario('fabioAkital@gmail.com', '2348', 'Fabio Akita')
usuario1.senha = 'grfdefefe'

console.log(usuario1.senha)