/*
    ECMAScript -> Associação Europeia dos Fabricantes de Computadores
    é uma associação que realiza a especificação e padronização de sistemas
    da informação. ECMA + JavaScript, resumindo, o JavaScript é a linguagem
    que vc escreve e executa nos navegadores e o ECMAScript é a especificação
    que define como a linguagem deve se comportar. Existem versões EX:ES6,ES&

    Sempre que uma nova atualização acontece no Js ela é lançada pelo ECMAScript
    que pode ser abreviada como ES


 Strict Mode -> modo estrito --> ativando esse modo, os erros
 que eram silenciosos passam a gerar exceções no JavaScript

"use strict" // escopo global aplica pra tudo

function showMessage(){

    let personName = "Rodrigo Gonçalves"
    console.log("Olá", personName)
}

showMessage()

class Student{
    get point(){
        return 7
    }
}

let student = new Student()
console.log(student.point)
// student.point = 10 --> retorna erro

// delete window.document -> tentando deletar uma propriedade que nn pode ser deletada

function sum(a, a, c){
   return a + a + c  //reclama que tem um parametro duplicado
}

const result = sum(1, 3, 2)
console.log(result) // --> sem modo restrito dá 8
// pq ele sobrepõe o 1 parametro entao 3 + 3 + 2

Destructuring assignment (desestruturação) permite extrair dados
de arrays ou objetos em variáveis distintas



const data = ["Ronaldo", "Ronaldo@gmail.com"]

// Desestruturando
const [username, email] = data
console.log("Nome:",username)
console.log("Email:",email)

const fruits = ["banana", "maça", "laranja"]
// desestruturar somente o primeiro
const [item] = fruits
console.log(item)

// ignorando o 1 na desestruturação usar _
const[_, apple] = fruits
console.log(apple)



// Desestruturar objetos

const product = {
    description: "Teclado",
    price: 150,
}

const { description, price} = product
console.log("Descrição:", description)
console.log("Preço: R$", price)

function newProduct(description, price){
    console.log("### NOVO PRODUTO ###")
    console.log("Descrição:", description)
    console.log("Preço: R$", price)
}

//newProduct("Mouse", 70)// tem q ser na ordem
// melhor jeito

newProduct({
    description: "mouse",
    price: 70
})
    
Rest params (...) permite representar um número indefinido
de argumentos como um array

                    // dps dos ... pode ser qq nome
function values (...rest){ // dentro desse rest tem o restante dos parametros
    console.log(rest)// se tirar os 3 pontos vira um array
}

values(2, 1, 3, 4, 5)

Spread(espalhar)-> permite que um objeto iterável, como uma
expressão de array ou uma string seja expandido para ser
usado onde zero ou mais argumentos.


const numbers = [1, 2, 3]
console.log(numbers)

//spread
console.log(...numbers)

const data = [
    {
        name: "Ronaldo",
        email: "ronaldo@gmail.com",
        avatar: "r.png",
    },
    {
        name: "Joao",
        email: "joao@gmail.com",
        avatar: "j.png",
    },
]

console.log(data)

// spread em array de objs
console.log(...data)*/