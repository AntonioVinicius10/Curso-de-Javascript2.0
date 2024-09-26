class usuario {
    email;
    senha;
    nome;
        validarSenha(email, Senha) {
            return email + Senha === this.nome
        }
    constructor (email, senha, nome) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}
class admistrador extends usuario {
    permissões;
    alidarSenha(email, senha) {
        return email === this.email && senha === this.senha
    }
    constructor ( email, senha, nome, permissões) {
        super(email, senha, nome,);
        this.permissões = permissões;
    }
}

class comprador extends usuario {
    compras;
    constructor(email, senha, nome, compras){
            super(email, senha, nome)
            this.compras = compras 
    }
}

const admin = new admistrador('admin@gmail.com', 'senha', 'Sergio', [1, 6])
const Usuario = new usuario('email','senha','nome')

const Comprador = new comprador('comprador', '1234', 'BTL');
//comprador.senha = 'nova senha'

console.log(Usuario.validarSenha('email','senha'))
console.log(admin.validarSenha('admin@gmail.com','senha'))
console.log(Comprador)