/*
Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

const input = require("prompt-sync")()

let num = Number(input("Digite um número: "))
for(i = 0; i < 10; i++){
    console.log(num)
}