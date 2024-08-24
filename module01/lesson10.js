
// let tL = Array()

// tL['hard'] = Array()
// tL['fru'] = Array()
// tL['peple'] = Array('Arist', 'Tokds')

// tL['hard'][0] = 'Notbook'
// tL['hard'][1] = 'Mouse'
// tL['hard'][2] = 'Teclado'
// tL['fru'][2] = 'Laranja'
// tL['fru'][2] = 'Maçã'

// console.table(tL)

// =============================================================
// Mostrar posição do elemento no array

// let fruitList = []

// fruitList[0] = 'Maçã'
// fruitList[1] = 'Bana'
// fruitList[2] = 'Melancia'
// fruitList[3] = 'Morango'
// fruitList[4] = 'Uva'


// console.log(fruitList.indexOf('Uva'))
// let index = fruitList.indexOf('Uva')


// console.table(tL)
// ==========================================================
// ORDENAR NÚMERO NO ARRAY
// let numberList = []

// numberList[0] = 10
// numberList[1] = 12
// numberList[2] = 0
// numberList[3] = 16
// numberList[4] = 7
// numberList[5] = 9

// console.log(numberList.sort((a, b) => a - b))

// FUNÇÕES ================================================
// calcula área

// function calculateLandArea(num1, num2) { // Necessário ser igual ao da linha abaixo
//     let area = num1 * num2 // necessário ser igual á linha acima
//     return area
// }

// let width = 15
// let heith = 30

// teste = calculateLandArea(width, heith)

// console.log(teste)


// =========================================================================
// Exercicio: Ordenar array alfabeticamente dentro de uma função

let alfabeto = ['J', 'A', 'I', 'L', 'S', 'O', 'N']

function ordena(arrayParaOrdenar) {
    return arrayParaOrdenar.sort()
}

console.log(ordena(alfabeto))