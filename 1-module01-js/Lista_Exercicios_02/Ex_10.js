/*
Criando Relatórios com Objetos e Arrays
Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.
*/

let vendas = [
    { nome: 'mouse', quantidade: 20, valor: 25.5 }, // 'nome' para diferenciar do 'produto' dentro do forEach
    { nome: 'teclado', quantidade: 12, valor: 80.9 },
    { nome: 'headset', quantidade: 10, valor: 49 },
    { nome: 'webcan', quantidade: 22, valor: 55.9 },
    { nome: 'monitor', quantidade: 5, valor: 500 },
]

let precoTotalDasVendas = 0

vendas.forEach(produto => { // percorre todos os objetos dentro do array vendas
    precoTotalDasVendas += (produto.quantidade * produto.valor)
})

console.log(`Valor total das vendas: ${precoTotalDasVendas.toFixed(2)}`)