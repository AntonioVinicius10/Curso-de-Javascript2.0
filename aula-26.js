// map 
const pessoas = [{
    name: 'Antonio',
    idade: 14,
},
{
    name: 'breno masi',
    idade: 35,
}]

const converterObjeto = (lista) => {
    return {
        ...lista,
       // nome: lista.name,
        //idade: lista.idade, 
        nomeEIdade: `${lista.name} e ${lista.idade} `
    }
}

console.log(pessoas.map(converterObjeto))