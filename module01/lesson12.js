// let serie = {
//     nome: "The Boys",
//     genero: ["Ação, Parória, Herois"],
//     nrTemporadas: 4,
//     status: "Em andamento",
//     classificacao: 18,
//     nrEpsodios: {
//         temp1: 10,
//         temp2: 10,
//         temp3: 50,
//     },

//     mostrarCaracteristicas: function() {
//         return `O nome da séria é: ${this.nome} e sua classificação é ${this.classificacao}`
//     }

// }

// console.log(serie.nome) // mostra somente o nome da série

// console.log(serie.mostrarCaracteristicas())


// ========================================================
// Exercicio - FAZER UM LIVRO

// let livro = {
//     titulo: "Bíblia",
//     autor: "Deus",
//     sublivros: {
//         liv_1: "Mateus",
//         liv_2: "Marcos",
//         liv_3: "Lucas",
//         liv_4: "João",
//         liv_5: "Atos",
//         liv_6: "Romanos",
//     },
//     corCapa: "Preta",
//     valorMedio: 100.00,
//     capitulos: 3800,
//     versiculos: 120235,
//     mostrarCaracteristicas: function() {
//         return (this.titulo + " foi escrito por " + this.autor)
//     }
// }

// //console.log(livro.mostrarCaracteristicas())

// console.log(livro.sublivros)

// =======================================================================
// Exercicio - FAZER UM CARRO
// let carro = {
//     nome: "Herby",
//     modelo: "Marea",
//     velMax: 350,
//     ano: 2005,
//     acelerar: function(){
//         return "Acelerando carro na rua 01"
//     }
// }

// // console.log(carro)

// console.log(carro.acelerar())

// =======================================================================
// Exercicio - ATLETA (Refazer)

// let atleta = {
//     nome: "Rayssa Leal",
//     esporte: "Skate",
//     idade: 16
// }

// atleta.nacinalidade = 'Brasil'
// atleta.medalhas = {
//     ouro: 10,
//     prata: 1,
//     bronze: 1
// }

////////////////////////////////////////////////////////////////////////////////////////////
// ========================================================
// FUNÇÃO CONSTRUTORA (concludo)   ///////////////////////////////////////////////////////////

// function computador(processador, gpu, ram, armazenamento) {
//     this.processador = processador
//     this.gpu = gpu
//     this.ram = ram
//     this.armazenamento = armazenamento

//     this.ligar = function () {
//         return `O ${this.processador} está funcionando!`
//     }

//     this.mostrarEspecificacoes = function () {
//         return `
//         processador: ${this.processador}
//         gpu: ${this.gpu}
//         ram: ${this.ram}
//         armazenamento: ${this.armazenamento}`
//     }
// }

// let pc = new computador("Raizem 5", "5556G", "16GB", "SSD 250GB")

// console.log(pc.ligar())


function livro(nome, cor, autor, ){

}







/////////////////////////////////////////////////////////////////////////////////////////////
// ================================================================================


// // OBJ

// let obj1 = {
//     nome: "Bruce",
//     profissao: "Batman"
// }

// let obj2 = obj1 // Cria uma referência(regra para objeto) -> tudo que muda em um muda no outro

// obj1.idade = 35

// obj2.companheiro = "Robin"

// console.log(obj1)
// console.log(obj2)

//====================================================
// FOR IN e FOR OF (ESTUDAR E TESTAR)

// ===============================================================
// function jogos(titulo, genero, anoLancamento, empresa, jogar){
//     return {
//         titulo,
//         genero,
//         anoLancamento,
//         empresa,
//         jogar
//     }
// }


// let jogo1 = jogos("Final Fantasy", "RPG", "1997", "Square Soft", "Jogando")

// for(let chave in jogo1) {
//     console.log(`${chave}: ${jogo1[chave]}`)
// }
















