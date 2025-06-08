/*
    Array:
        É uma coleção ordenada de valores. Podemos comparar
        um array a uma lista, onde cada item da lista contém
        uma posição específica, conhecida como índice.
        1º índice é o 0, total = -1 ex 100 posições do 0 ao 99       
*/

// Criando um array com construtor

const newArray = new Array()
console.log(newArray)
console.log(newArray.length) // retorna 0 pq nn tem nada no array

const avaliable = new Array(10) //tamanho do array 0 a 9
console.log(avaliable)

let frutas = ["Apple", "Banana", "Orange"]
console.log(frutas) // todas as infos do array
console.log(frutas[0]) // item específico

let fullName = "Ronaldo Tavares Cano"

// Cria um array com os nomes separando os espaços
console.log(fullName.split(" "))

//Cria um array com as letras
console.log(Array.from(fullName))

let users = []

// adicionar itens ao final da lista

users.push("Ronaldo")
users.push("Ana")
users.push("Marcos")

console.log(users)

// adicionar ao início do array

users.unshift("Pedro")
console.log(users)

// remove o item 1 item

users.shift()
console.log(users)

// remove do final

users.pop()
console.log(users)

let fruits = ["Lemon", "Apple", "Strawberry", "Watermelon"]

// Retorna o índice do elemento
let position = fruits.indexOf("Lemon")
console.log(position)

// Deletar um item específico
    // 1º parametro = indice inicial 2º = qts itens eu quero deletar
fruits.splice(1, 1)
console.log(fruits)

// 2 forma:
fruits.splice(position, 1)
console.log(fruits)

let myArray = [
    "Um texto",
    10,
    true,
    function(){
        console.log("Hello World")
    },
    {
        name: "Ronaldo",
        email: "Ronaldo@gmail.com"
    },
]

console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])
myArray[3]()
console.log(myArray[4])
console.log(myArray[4].name)
console.log(myArray[4].email)

let movies = ["Avengers", "Avatar", "Django"]

// VErifica se um item existe no Array
console.log(movies.includes("Ice Age"))// false
console.log(movies.includes("Django")) // true
console.log(movies.includes("django")) // false