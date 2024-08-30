// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//         this.previous = null
//     }
// }

// class DoublyLinkedList {
//     constructor(){
//         this.head = null // cabeça (primeiro)
//         this.tail = null // calda(último)
//         this.size = 0
//     }

//     add(data){
//         let newNode = new Node(data)

//         if(this.head === null){
//             this.head = newNode
//             this.tail = newNode
//         } else {
//             this.tail.next = newNode
//             newNode.previous = this.tail
//             this.tail = newNode
//         }

//         this.size++
//     }

//     insertAt(data, index){
//         if(index < 0 || index > this.size) {
//             return console.log('Index fora dos limites!')
//         }

//         let newNode = new Node()
//         let current = this.head // current = atual

//         if(index === 0){
//             if(this.head === null){
//                 this.head = newNode
//                 this.tail = newNode
//             } else {
//                 newNode.next = this.head
//                 this.head.previous = newNode
//                 this.head = newNode
//             }

//         } else if(index === this.size){
//             this.tail.next = newNode
//             newNode.previous = this.tail
//             this.tail = newNode
//         } else {
//             for(let i = 0; i < index; i++){
//                 current = current.next
//             }

//             newNode.next = current
//             newNode.previous = current.previous
//             current.previous.next = newNode
//             current.previous = newNode


//         }

//         this.size++
//     }
// }





// =======================================================
// abaixo o cod do professor

class Node {
    constructor(data){
        this.data = data
        this.next = null
        this.previous = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    add(data){
        let newNode = new Node(data)

        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        } else {
            for(let i = 0; i < index; i++){
                current = current.next
            }

            newNode.next = current
            newNode.previous = current.previous
            current.previous.next = newNode
            current.previous = newNode
        }

        this.size++
    }
// apartir daqui cont aula
    removeAt(index){
        if(index < 0 || index >= this.size){
            return console.log("Index fora dos limites!")
        }

        let current = this.head

        if(index === 0){
            this.head = this.head.next

            if(this.head !== null){
                this.head.previous = null
            } else {
                this.tail = null
            }
        } else if(index == this.size - 1){
            this.tail = this.tail.previous
            this.tail.next = null
        } else {
            for(let i = 0; i < index; i++){
                current = previous.next
            }

            current.previous.next = current.next
            current.next.previous = current.previous
        }

        this.size--

    }

    getData(index){
        if(index < 0 || index >= this.size){
            return console.log("Index fora dos limites!")
        }

        let current = this.head

        for(let i = 0; i < index; i++){
            current = current.next
        }

        return current.data
    }

    print(){
        let current = this.head
        let result = []

        while(current !== null){
            result.push(current.data)
            current = current.next
        }

        console.log(result.join(' <=> '))
    }

}

// let lista = new DoublyLinkedList()
// lista.add('TESTE', 'OUTRO')
// console.log(lista)

let lista = new DoublyLinkedList()
lista.add(1)
lista.add(13)
lista.add(16)
lista.add(11)


// console.log(lista)
lista.print()

// ====================================================
// Exercicio
//Implementem um método para limpar toda a lista, remover todos os nós.
//Inverter a ordem dos elementos em uma lista.





