/*
Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
*/

const input = require("prompt-sync")()  // Necessário para entrada do usuário

let a = Number(input('Lado A: '))
let b = Number(input('Lado B: '))
let c = Number(input('Lado C: '))

function verificaTriangulo() {
    if ((a < (b + c)) && (b < (a + c)) && (c < (a + b))) {
        return true // retorna true se todas as condiçoes forem verdadeiras
    }
}
if (verificaTriangulo()) {
    if (a === b && b === c) {
        console.log("Os lados formam um triângulo EQUILÁTERO!")
    } else if ((a === b) || (a === c) || (b === c)) {
        console.log("Os lados formam um triângulo ISOCELES!")
    } else if ((a != b) && (b != c) && (a != c)) {
        console.log("Os lados formam um triângulo ESCALENO!")
    }
} else {
    console.log("As medidas não podem formar um triângulo!")
}