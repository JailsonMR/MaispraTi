/*
Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.
*/

const input = require("prompt-sync")()

let num = 0
let somaTotal = 0

for(let count = 1; count <= 5; count++){
    num = Number(input(`Digite o ${count}º número: `))
    somaTotal = somaTotal + num
}

console.log(`Soma total: ${somaTotal}`)