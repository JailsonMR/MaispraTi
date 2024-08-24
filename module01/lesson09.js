// ==========================================================
// EX 01
// Soma dos elementos de um Array

// 

// let sum = 0
// let arr = [10, 20, 30, 40]


// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }

// console.log(sum)

// ==========================================================
// EX 02
// Encontre o Maior Número em um Array


// let arr = [98, 78, 120, 40]

// let max = arr[0]

// for(let j = 0; j < arr.length; j++){
//     if(arr[j] > max){
//         max = arr[j]
//     }
// }

// console.log(max)

// ========================================================== refazer print
// EX 03
// Reverter um Array

// let a1 = [98, 78, 120, 40]

// let a2 = [a1[3], a1[2], a1[1], a1[0]]

// console.log(a2)

// for(let k = arr)

// ============================================================
// EX 04 - Criem um novo array contendo apenas os números pares 


// let arr = [10, 11, 22, 98, 78, 5, 58, 2, 2, 120, 40]

// let evens = [] // evens = pares

// for(let m = 0; m < arr.length; m++){
//     if(arr[m] % 2 === 0){
//         evens.push(arr[m])
//     }
// }
// console.log(evens)


// Ex 5 =================================================   refazer print
// 5. Contar Ocorrências de um Valor

// let vet = [10, 10, 7, 5, 10]

// for(let 
 
// arrays / vetores multidimencionais

// let matriz = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// console.log(matriz)

// console.table(matriz)

// Ex 9 - posição ======================================================= feito
// Elemento na posição... x

// let matriz = [
//     [18,22,3],
//     [4,98,6],
//     [77,8,25],
// ]

// for(let i = 0; i < matriz.length; i++){
//     for(let j = 0; j < matriz[i].length; j++){
//         console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`)
//     }
// }

// Ex 10 ================================================================
// Soma 2 matrizes

// let arr1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// let arr2 = [
//     [9, 8, 7],
//     [6, 5, 4],
//     [3, 2, 1]
// ]

// let resultado = []

// if(arr1.length !== arr2.length || arr1[0].length !== arr2[0].length){
//     throw new Error("Os arrays devem ter o mesmo tamanaho!")
// }

// for(let i = 0; i < arr1.length; i++){
//     let somaLinha = []
//     for(let j = 0; j < arr1[i].length; j++){
//         somaLinha.push(arr1[i][j])
//     }

//     resultado.push(somaLinha)
// } 

// console.log(resultado)


// Abaixo o do Joelson copiado do grupo

let matrizA =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let matrizB =[
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]
let matrizC = []

if(matrizA.length !== matrizB.length || matrizA[0].length !== matrizB[0].length){
    throw new Error("Os arrays devem ter o mesmo tamanho.")
}

for(let i=0; i< matrizA.length; i++){
    let somaLinha = []
    for(let j=0; j<matrizB[i].length;j++){
        somaLinha.push(matrizA[i][j]+matrizB[i][j])
    }
    matrizC.push(somaLinha)
}
console.table(matrizC)

























