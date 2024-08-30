// EXERCICIO 01
// 1 - Verifique se um número é positivo, negativo ou zero
// Escreva um programa que leia um número e use uma estrutura if para verificar se o número é positivo, negativo ou zero. Imprima uma
// mensagem apropriada para cada caso.

 const prompt = require('prompt-sync')()

// const num1 = Number(prompt('Digite um número: '))

// if(num1 > 0 ) {
//     console.log('O número informado é positivo!')
// } else if (num1 < 0) {
//     console.log('O número informado é negativo!')
// } else if (num1 === 0){
//     console.log('O número é zero!')
// } else {
//     console.log('Erro! informe um número"')
// }

// ========================================================== verificar
// 2 - Verifique se um ano é bissexto
// Escreva um programa que leia um ano e use uma estrutura if para verificar se o ano é bissexto. Um ano é bissexto se for divisível por 4,
// mas não por 100, exceto se também for divisível por 400. Imprima uma mensagem apropriada.

// const year = Number(prompt('Informe um ano: '))

// if((year % 4 === 0 && year % 100 !== 0) || (year % 400 = 0)) {
//     console.log(`O ano ${year} é bissexto!` )
// } else {
//  console.log(`${year} não é bisexto!`)
// }
// ====================================================================== continuar
// Ex 03
// 3 - Calcule a média de três números e determine o conceito
// Escreva um programa que leia três notas de um aluno, calcule a
// média e use uma estrutura if/else para determinar o conceito (A, B, C,
// D, F) baseado na média. Imprima o conceito.

// Dica: A média é a soma das notas dividida por três. Defina os intervalos para cada conceito.

// let grade1 = Number(prompt('Informe a nota 1: '))
// let grade2 = Number(prompt('Informe a nota 2: '))
// let grade3 = Number(prompt('Informe a nota 3: '))

// let avg = (grade1 + grade2 + grade3)/3
// let concept

// if(avg >= 90) {
//     console.log(`A média das notas é ${avg.toFixed(2)}`)
//     concept 'A'
// }




// ========================================================= verificar
// Ex 09 
// 9 - Verifique a faixa etária de uma pessoa
// Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária:
//             Criança: 0 - 12 anos
//             Adolescente: 13 - 17 anos
//             Adulto: 18 - 59 anos
//             Idoso: 60 anos ou mais

// Dica: Utilize uma estrutura switch dentro do bloco if/else para imprimir uma mensagem específica para cada faixa etária.

// let age = Number(prompt('Informe a sua idade: '))

// let ageRange

// if(age >= 0 && age <= 12){
//     ageRange = 'Criança'
// } else if(age >= 13 && age <= 17){
//         ageRange = 'Adolescente'
// } else if(age >= 18 && age <= 59){
//     ageRange = 'Adulto'
// } else {
//     ageRange = 'Idade inválida'
// }
// switch(ageRange) {
//     case 'Criança' :
//         console.log('Você é uma criança!')
//         break
//     case 'Adolescente' :
//         console.log('Você é uma Adolescente!')
//         break
//     case 'Adulto' :
//         console.log('Você é uma Adulto!')
//         break
//     defalt :
//         console.log('Idade inválida!')
// }

// ====================================================================
// EXERCICIO 10
// Encontre o maior divisor comum (MDC) de dois números
// Escreva um programa que use um loop do while para encontrar o maior divisor comum (MDC) de dois números fornecidos (por exemplo, 56 e 98).

// Dica: Utilize o algoritmo de Euclides, onde você repete o processo de substituir o maior número pela diferença dos dois números até que ambos sejam iguais.

// let num1 = 255
// let num2 = 5540

// let a = num1 // a e b só foram usado pra preservar o valor original de num1 e num2
// let b = num2

// do {
//     let temp = b
//     b = a % b
//     a = temp
// } while (b !== 0)

// const MDC = a

// console.log(`O maior divisor comum de ${num1} ${num2} é ${MDC}`)

// ==================================================================== Continuar
// Exercicio 
// Escreva um algoritimo para imprimir os 50 primeiros numeros primos maior que 100.
// obs: numero primo é aquele divisivel somente por 1 e ele mesmo.

// let count = 0
// let num = 101

// do {
//     let primo = 0
//     for(let i = 1; i<= num; i++){
//         if(num % i === 0) {
//             primo++
//         }
//     }
// }

// if(primo)
// ==========================================

let carros = Array()

carros[0] = 'Civic'
carros[1] = 10
carros[2] = true
carros['hiago'] = '10'

// console.log(carros)

//-----------------

let motos = Array('CBR', 'Ninja', 10)
let livros = ['filme111', 'filme222', 'filme333', 'filme444']

// livros.push('push') // adiciona no final
// livros.unshift('unshift') //unshift // adiciona no inicio
// livros.pop('pop') //pop  // remove no final
// livros.shift('shit') //shit  // remove no início


console.log(livros)





































































