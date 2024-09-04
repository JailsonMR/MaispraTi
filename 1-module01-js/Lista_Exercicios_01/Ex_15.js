/*
Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.
*/

let quantidade = 10

let fibonacci = [0, 1]

for(let count = 2; count < quantidade; count++ ) {
    fibonacci.push(fibonacci[count - 1] + fibonacci[count -2])
}

console.log(fibonacci)

