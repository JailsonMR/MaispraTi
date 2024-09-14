/*
Implementando um Carrinho de Compras
Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.
*/

let carrinho = {
    itens: [
        { nome: 'Fone de ouvido', quantidade: 2, precoUnitario: 25.5 },
        { nome: 'Câmera WiFi', quantidade: 3, precoUnitario: 49 },
        { nome: 'Lampada Inteligente', quantidade: 1, precoUnitario: 22.9 },
        { nome: 'Alarme com IA', quantidade: 5, precoUnitario: 143 },
        { nome: 'Sensor de Presença', quantidade: 2, precoUnitario: 47 },
    ]
}

let valorTotalCarrinho = 0

carrinho.itens.forEach(iten => {
    valorTotalCarrinho += (iten.quantidade * iten.precoUnitario)
})

console.log(`Valor total do Carrinho: R$ ${valorTotalCarrinho.toFixed(2)}`)