/*
Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/

const input = require("prompt-sync")()

let nota = input("Escreva qual foi nota! ")

if (nota < 0 || nota > 10) {
    console.log("Nota inválida! Digite o um valor de 0 a 10!")
} else if (nota < 5) {
    console.log("Infelizmente você foi reprovado!")
} else if (nota < 7) {
    console.log("Você está de recuperação!")
} else {
    console.log("Parabéns! Você foi aprovado!")
}