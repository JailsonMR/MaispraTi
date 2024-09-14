/*
Contabilizando Elementos com uma Condição
Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.
*/

let clientes = [
    { nome: "Bruno", idade: 55, cidade: 'Fortaleza' },
    { nome: "Jose", idade: 28, cidade: 'Joinvile' },
    { nome: "Messias", idade: 35, cidade: 'Belo Horizonte' },
    { nome: "Gustavo", idade: 45, cidade: 'Uruçuí' },
    { nome: "Jéssica", idade: 22, cidade: 'Parnaíba' },
]

let clientesMaisDe30Anos = 0;

clientes.forEach(clente => {
    if(clente.idade > 30){
        clientesMaisDe30Anos++
    }
})

console.log(`Clientes com mais de 30 anos: ${clientesMaisDe30Anos}`)