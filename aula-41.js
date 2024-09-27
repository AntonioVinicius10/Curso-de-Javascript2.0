class estoque {
    produto;
    marca;
    preco;
    descricao;
    codigo;
    quantidade;
    sistema_operacional;

    constructor (celular, marca1, valor, definição, chave, quantia, sistema_operacional) {
        this.produto = celular
        this.marca = marca1
        this.preco = valor
        this.descricao = definição
        this.codigo = chave
        this.quantidade = quantia
        this.sistema_operacional = sistema_operacional 
    }
}

class smartphone extends estoque {
   
   
}

class smartphone1 extends smartphone {
    constructor (celular, marca1, valor, definição, chave, quantia, sistema_operacional){
        super(celular,marca1, valor, definição, chave, quantia, sistema_operacional);
    }

}



const estoqueProduto = new estoque('smartphone','Iphone', 1500, 'Celular', 3485, 20, 'IOS')
const smartphoneProduto = new smartphone('smartphone', 'LG', '3000', 'L11', '2030', 10, 'Android')
const smartphoneProduto1 = new smartphone('smartphone', 'Motorola', '3000', 'L11', '2030', 10, 'Android')

estoqueProduto.quantidade = 20;
estoqueProduto.preco = 1500;
smartphoneProduto1.quantidade = smartphoneProduto1.quantidade + 0;
smartphoneProduto1.preco = 50;

if (estoqueProduto.preco && estoqueProduto.quantidade <= 0){
    console.log('Verifique se o quantidade ou produto não estão zero ou é negativo')
} else {
    console.log(estoqueProduto)
}
console.log(smartphoneProduto)

if (smartphoneProduto1.quantidade < 0 || smartphoneProduto1.quantidade >= 1000 || smartphoneProduto1.preco <= 100) {
    console.log('Quantidade Invalida')
} else {
    console.log(smartphoneProduto1)
}
