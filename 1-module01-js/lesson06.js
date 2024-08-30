// console.log(10 > 5) // t
// console.log(10 < 5) // f
// console.log(10 <= 5) // f 
// console.log(10 >= 5) // t
// console.log(10 == 5) // f
// console.log(10 == 5) // f
// console.log(10 === 5) // f
// console.log(10 != 5) // t
// console.log(10 !== '5') // t
// console.log(10 !== 5) // t
// console.log(10 !== "5") // t

// const idade = 33

// if (idade >= 18 && idade <= 32) {
//     console.log(`Pode se inscrever no concurso`);
// } else {
//     console.log(`Nao pode se inscrever no concurso`);
// }


// ==================================================
// EXERCICIO 1 - PAR OU IMPAR
// let num = 11

// if (num % 2 === 0) {
//     console.log("Par")
// } else {
//     console.log("impar")
// }


// ==================================================
// EXERCICIO 2 - COMPARA 3 NÚMEROS

// let n1 = 8
// let n2 = 36
// let n3 = 12

// if((n1 > n2) && (n1 > n3)) {
//     console.log(n1 + " É maior que " + n2 + " e " + n3)  //n1, "é" , "maior que ", n2, "e ", n3)
// } else if ((n2 > n1) && (n2 > n3))  {
//     console.log(n2 + " É maior que " + n1 + " e " + n3)
// } else if ((n3 > n1) && (n3 > n2)) {
//     console.log(n3 + " É maior que " + n1 + " e " + n2)
// } else {
//     console.log("O número " + n3 + " não é maior") //n1, "não é maior"
// }

// ==================================================
// EXERCICIO 3 - CALCULADORA SIMPLES (fazer depois sozinho)

// const prompt = require('prompt-sync')()

// let num1 = Number(prompt("Insira o primeiro valor: "))
// let num2 = Number(prompt("Insira o segundo valor: "))
// let operation = prompt("Informe a operação desejada (+, -, *, / ): ")
// let result = 0

// if(operation === '+'){
//     result = num1 + num2
// } else if(operation === '-'){
//     result = num1 - num2
// } else if(operation === '*'){
//     result = num1 * num2
// } else if(operation === '/'){
//     if(num2 !== 0){
//         result = num1 / num2
//     } else {
//         console.log("Erro: divisão por zero!")
//         result = undefined
//     }
// } else {
//     "Operação inválida"
//     result = undefined
// }
// console.log(result)

// --------------------------------------------------------
// treino

// const prompt = require('prompt-sync')()

// let n1 = Number(prompt("Escolha um num: "))
// let n2 = Number(prompt("Escolha outro num: "))
// let operation = prompt("Informe a operação: +, -, *, / ")
// let resultado = 0

// if(operation === '+') {
//     resultado = n1 + n2
// } else if(operation === '-') {
//     resultado = n1 - n2
// } else if(operation === '*') {
//     resultado = n1 * n2
// } else if(operation === '/') {
//     if(n2 === '0') {
//         resultado = "Erro: Divisão por zero!"
//     } else {
//         resultado = n1 / n2
//     }
// } else {
//     let resultadoErro = "Operação inválida!"
//     resultado = resultadoErro
// }

// console.log(`O resulta de ${n1} ${operation} ${n2} é ${resultado}`)

// ==================================================
// switch

// let option = 2

// switch(option){
//     case 1:
//         console.log("Você selecionou a primeira opção")
//         break
//     case 2:
//         console.log("Você selecionou a segunda opção")
//         break
//     default:
//         console.log("Você não selecionou nenhuma opção")
//         break
// }


// Exercício 1: Verifiquem o dia da semana com a estrutura switch-case

// Exercício 2: Calcular o número de dias em um mês.

// - Sendo que o mês 1, 3, 5, 7, 8, 10 e 12 tem 31 dias
// - Os meses 4, 6, 9 e 11 tem 30 dias 
// - Mês 2 tem 28 dias