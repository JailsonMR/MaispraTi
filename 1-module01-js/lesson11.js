
// let teste = function(){
//     console.log('Testando')
// }
// teste()
//========================================================

// function showFunction(sucessCallback, errorCallback) {
//     if(false){
//         sucessCallback("Bem sucedida")
//     } else {
//         errorCallback("Erro na requisição")
//     }
// }

// let sucessCallback = function(message) {
//     console.log(message)
// }

// let errorCallback = (message) => {
//     console.log(message)
// }

// showFunction(sucessCallback, errorCallback)


//1. Soma dos Elementos de um Array

// let arrSum = function(arr){
//     let sum = 0

//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }

//     return sum
// }

// let arr = [10, 25, 40, 30]
// let sum = arrSum(arr)

// console.log(sum)


//2. Encontre o Maior Número em um Array

// VER NA IMAGEM


//3. Reverter um Array
//4. Criem um novo array contendo apenas os números pares
//5. Contar Ocorrências de um Valor

// let nome = "Jaques"

// console.log("Jaques".length) // comprimento
// console.log("Jaques".charAt(0)) // posição
// console.log(nome.indexOf('q')) // posição

// // console.log(nome.replace('Jaq', 'Marcos')) // substituir

// console.log(nome.substr(7, 8)) // apartir da posição 7, eliminar 8 posições
//                                 //  se omitir o segundo, elimina todo o restante
// console.log(nome.toUpperCase())
// console.log(nome.toLowerCase())

// console.log('-' + nome.trim() + '-') // Eliminar espaços

// Matemáticos

// console.log(Math.ceil(100.73)) // cima
// console.log(Math.floor(100.73)) // baixo
// console.log(Math.round(100.73)) // arredonda
// console.log(Math.sqrt(100.73)) // quadrado
// console.log(Math.pow(100.73)) 
// console.log(Math.cbrt(100.73))
// console.log(Math.abs(100.73))
// console.log(Math.random(100.73)) // aleatório

// DATAS

// let date = new Date()

// console.log(date.getDate()) // dia atual
// console.log(date.getMonth() + 1) // mes atual(contagem começa do 0)
// console.log(date.getFullYear()) // ano

// console.log(date.toString()) // 
// date.setDate(date.getDate() + 720) // 
// console.log(date.toString()) // 

// date.setFullYear(date.getFullYear() + 720)
// console.log(date.toString())


// let date1 = new Date(2024, 7, 6)
// let date2 = new Date(2023, 7, 6)

// console.log(date1.toString())

// console.log(date1.getTime())
// console.log(date2.getTime())

// let miliseconds_between_dates = Math.abs(date1.getTime() - date2.getTime())
// console.log(miliseconds_between_dates)

// let miliseconds_per_day = (1 * 24 * 60 * 60 * 1000)
// console.log(`Um dia dia tem ${miliseconds_per_day} milisegundos`)

// console.log(`A diferença entre as datas é de ${Math.ceil(miliseconds_between_dates/miliseconds_per_day)} dias`)

// =============================================================
// Exercicios

// Inverter uma string




// Contar vogais
// Gerar número aleatório
// Dias entre duas datas
// Formatar data












