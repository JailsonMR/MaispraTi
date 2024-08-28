/*
Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.
*/

const input = require("prompt-sync")()

let num = Number(input("Digite um número de 1 a 10: "))

for(let count = 0; count <= 10; count++) {
    let result = num * count
    console.log(`${num} x ${count} = ${result}`)
}