/*
Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.
*/

const input = require("prompt-sync")()

let num = Number(input("Digite um número: "))
let count = 0
let fatorial = 1

while(count < num){
    count++
    fatorial = (fatorial * count)
}

console.log(`Fatorial: ${fatorial}`)
