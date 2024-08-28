/*
Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.
*/

const input = require("prompt-sync")()

let idade = Number(input("Qual sua idade? "))

if (idade < 0) {
    console.log("Idade inválida, digite um valor maior ou igual a 0!")
} else if (idade >= 0 && idade <= 12) {
    console.log("Você ainda é uma criança!")
} else if (idade >= 13 && idade <= 17) {
    console.log("Você já é adolescente!")
} else if (idade >= 18 && idade <= 59) {
    console.log("Você já é um adulto!")
} else {
    console.log("Que legal, você já é idoso!")
}