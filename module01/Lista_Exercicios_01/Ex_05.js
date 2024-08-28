/*
Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
*/

const input = require("prompt-sync")()  // Necessário para entrada do usuário

let weight = Number(input("Qual seu peso [kg]? ")) // 'weighr' armazena o peso
let height = Number(input("Qual sua altura [m]? ")) // height armazena a altura
let imc = Number(weight / (height * height))  // calcula o IMC
imc = imc.toFixed(2) // formata com apenas 2 casas decimais

if (weight <= 0 || height <= 0) { // peso ou altura menor ou igual a '0'
    console.log("Valores inconsistentes. Tente novamente!")
} else if (imc <= 18.5) {
    console.log(`IMC: ${imc} - Categoria Abaixo do Peso!`)
} else if ((imc > 18.5) && (imc <= 24.9)) {
    console.log(`IMC: ${imc} - Categoria Peso Normal!`)
} else if ((imc > 24.9) && (imc <= 29.9)) {
    console.log(`IMC: ${imc} - Categoria Sobrepeso!`)
} else {
    console.log(`IMC: ${imc} - Categoria Obesidade!`)
}