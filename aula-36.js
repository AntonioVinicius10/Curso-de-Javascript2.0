class usuario {
    email;
    senha;
    nome;

    constructor (email, senha, nome) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}
class admistrador extends usuario {
    permissões;
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
const comprado = new comprador('comprador@gmail.com', 4321, 'fabio', 10   )

console.log(admin)
console.log(comprado.email)

if (comprado.email === 'comprador@gmail.com') {
    console.log(`Seja bem vindo ${comprado.email}`)
}


