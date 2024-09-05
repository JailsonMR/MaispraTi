/*
Acessando Propriedades de Objetos
Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.
*/

let carro = {
    marca: 'Fiat',
    modelo: 'Strada',
    ano: 2024,
    cor: 'Cinza'
}

for (let propriedade in carro){ 
    console.log(propriedade, carro[propriedade])
}