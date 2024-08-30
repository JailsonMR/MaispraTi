class Node {
    // Construtor da classe Node, responsável por criar um novo nó.
    constructor (data) {
      this.data = data  // Atribui o valor passado para o nó.
      this.next = null  // Inicializa o ponteiro 'next' como null, indicando que o nó é o último da lista.
    }
  }
  
  class LinkedList {
    // Construtor da classe LinkedList, responsável por criar uma nova lista ligada.
    constructor() {
      this.head = null  // Inicializa o head da lista como null, indicando que a lista está vazia.
      this.size = 0     // Inicializa o tamanho da lista como 0.
    }
  
    // Método para adicionar um novo nó ao final da lista.
    add(data) {
      let newNode = new Node(data)  // Cria um novo nó com os dados fornecidos.
  
      // Verifica se a lista está vazia. Se estiver, o novo nó se torna o head.
      if(this.head === null) {
        this.head = newNode
      } else {
        // Se a lista não estiver vazia, percorre a lista até encontrar o último nó.
        let current = this.head
        while(current.next !== null) {
          current = current.next
        }
        // O último nó encontrado aponta para o novo nó.
        current.next = newNode
      }
      this.size++  // Incrementa o tamanho da lista.
    }
  
    // Método para inserir um novo nó em uma posição específica.
    insertAt(data, index) {
      // Verifica se o índice é válido. Caso contrário, exibe uma mensagem de erro.
      if(index < 0 || index > this.size) {
        return console.log('index fora dos limites!')
      }
  
      let newNode = new Node(data)  // Cria um novo nó com os dados fornecidos.
      let current = this.head       // Inicializa a variável 'current' apontando para o head da lista.
      let previous                  // Declara a variável 'previous' para rastrear o nó anterior.
  
      // Se o índice for 0, insere o novo nó no início da lista.
      if(index === 0) {
        newNode.next = this.head    // O próximo nó do novo nó se torna o head atual.
        this.head = newNode         // O novo nó se torna o head da lista.
      } else {
        // Se o índice for maior que 0, percorre a lista até a posição desejada.
        for (let i = 0; i < index; i++) {
          previous = current        // Armazena o nó atual em 'previous'.
          current = current.next    // Move para o próximo nó.
        }
        newNode.next = current      // O próximo do novo nó aponta para o nó atual.
        previous.next = newNode     // O próximo do nó anterior aponta para o novo nó.
      }
  
      this.size++  // Incrementa o tamanho da lista.
    }
  
    // Método para imprimir todos os elementos da lista.
    printlist() {
      let current = this.head  // Inicializa a variável 'current' apontando para o head da lista.
      // Percorre a lista até o final (até 'current' se tornar null).
      while (current !== null) {
        console.log(current.data)  // Imprime os dados do nó atual.
        current = current.next     // Move para o próximo nó.
      }
    }
  }
  
  // Cria uma nova instância da classe LinkedList.
  let list = new LinkedList()
  
  // Adiciona elementos à lista.
  list.add("Formacao +praTi")
  list.add(true)
  list.add("elemento 3")
  
  // Insere um elemento na posição 1.
  list.insertAt("teste de indice", 1)
  
  // Imprime todos os elementos da lista.
  list.printlist()