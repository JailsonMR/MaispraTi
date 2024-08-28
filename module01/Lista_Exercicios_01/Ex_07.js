/*
As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

const input = require("prompt-sync")()
let quantidadeComprada = Number(input("Quantas maçãs você deseja? "))
if (quantidadeComprada < 12) {
    preco = 0.30
} else {
    preco = 0.25
}
valorTotalCompra = preco * quantidadeComprada
console.log(`Você comprou ${quantidadeComprada} maçãs a R$ ${preco.toFixed(2)} cada. \nTotal a pagar: R$ ${valorTotalCompra.toFixed(2)}!`)