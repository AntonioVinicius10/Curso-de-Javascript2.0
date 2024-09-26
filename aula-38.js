// Object.defineProperty
// Object.defineProperties

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
                nome: propriedadePadrão(nome),
                senha: propriedadePadrão(senha),
                email: propriedadePadrão(email)
            })
     }
}

const usuario1 = new Usuario('fabioAkital@gmail.com', '2348', 'Fabio Akita')

console.log(usuario1)
