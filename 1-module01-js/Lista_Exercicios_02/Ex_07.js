/*
Modificando Objetos em um Array
Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.
*/

let porcDesconto = 0.1

let produtos = [
    { nome: "Arroz", preco: 5, desconto: porcDesconto },
    { nome: "Feijão", preco: 8, desconto: porcDesconto },
    { nome: "Macarrao", preco: 4, desconto: porcDesconto },
    { nome: "Carne", preco: 30, desconto: porcDesconto }
]

produtos.forEach(produto => {
  let precoComDesconto = produto.preco * (1 - produto.desconto)
  console.log(`Produto: ${produto.nome}, Preco: ${produto.preco.toFixed(2)} // Preco com desconto: ${precoComDesconto.toFixed(2)}`)
})