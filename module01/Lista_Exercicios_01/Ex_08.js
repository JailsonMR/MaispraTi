/*
Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/

const input = require("prompt-sync")()

let x = input("Digite um valor: ")
let y = input("Digite outro valor: ")

if(x < y) {
    console.log(`${x}, ${y}`)
} else {
    console.log(`${y}, ${x}`)
}