/*
    Função construtora
        É a função que utiliza o operador new que é capaz de instanciar objetos
        instancia é uma cópia do objeto na memória
*/

function createProduct(name){

    const product = {}
    product.name = name
    product.details = function(){
        console.log(`O nome do produto é ${this.name}`)
    }

    return product
}

// o new cria um novo objeto com a mesma estrutura da função construtora
const product1 = new createProduct("Teclado")
console.log(product1.name)
product1.details()

const product2 = new createProduct("Mouse")
console.log(product2.name)
product2.details()

console.log(product1 === product2)

//Exemplos de funções construtoras disponíveis no js

let myName = new String("Ronaldo")
console.log(myName)

let price = "40.6".replace(".", "")
console.log(price)

let date = new Date("07-07-2027")
console.log(date)

function Person(name){
    this.name = name
    this.message = function(){
        console.log(`Olá, ${this.name}`)
    }
}


const person1 = new Person("Veiga")
console.log(person1.name)
person1.message()

const person2 = new Person("Estevão")
console.log(person2.name)
person2.message()