/*
Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

const input = require("prompt-sync")()

let num = 1
let soma = 0
let count = 0

while (num != 0) {
    num = Number.parseFloat(input("Digite qualquer número ou 0 para sair: "))
    count++
    soma = soma + num
}

media = soma / (count - 1)
console.log(`Média geral: ${media}`)