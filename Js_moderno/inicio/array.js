/*
Método map() -> chama a função callback recebida por
parâmetro para cada elemento do Array original, em ordem,
e constrói um novo array com base nos retornos de cada 
chamada. E no final, devolve o novo array.


const products = ["teclado", "mouse", "monitor"]

// percorrendo os itens do array: uso qnd quero manipular
products.map((item)=>{
    console.log(item)
})

// sintax reduzida: uso qnd quero apenas o retorno
products.map((product) => console.log(product))

// usando o novo objeto retornado
const formated = products.map((product) =>{
    //return product.toLocaleUpperCase()
    return {
        description: product,
        id: Math.random(),
    }
})
console.log(formated)

Método filter() -> cria um novo array com todos os
 elementos que passaram na condição


const words = ["Javascript", "Html", "CSS", "Git", "C#"]

const result = words.filter((word) => word.length > 3)
console.log(result)

const products = [
    {description: "Teclado", price: 100, promotion: true},
    {description: "Monitor", price: 700, promotion: false},
    {description: "Mouse", price: 300, promotion: true},
]

// filtro de produtois na promoção
const promotion = products.filter((product) => product.promotion === true)
console.log(promotion)

Método findIndex() retorna o índice no array do primeiro
elemento que satisfazer a condição. Caso contrário, retorna
-1 indicando que nenhum elemento passou no teste

const values = [4, 6, 8, 12]
// retorna o index 1, pq 6 é maior do q 4 e o index do 6 é 1
const index = values.findIndex((value) => value > 4)
console.log(index)
console.log(values[index]) // retorna o numero do index

console.log(values.findIndex((value) => value > 12)) 

Método find() -> retorna o valor do primeiro elemento do
array que satisfazer a condição. caso contrário, retorna
undefined.


const values = [5, 12, 8, 130, 144]
const found = values.find((value) => value > 10)
console.log(found) // retorna 12 q é o 1 valor a passar na condição

const fruits = [
    {name: "apples", quantity: 23,},
    {name: "strawberry", quantity: 25,},
    {name: "bananas", quantity: 73,},
]
const result = fruits.find((fruit) => fruit.name === "bananas")
console.log(result)

Método every() -> teste se todos os elementos do array
passam na condição e retorna um valor Boolean.


const ages = [12, 15, 18, 23, 45, 57]

// verificar se todas as idades ssão >= 18

const result = ages.every((age) => age >= 18)
console.log(result) // return false pq 12 e 15 não sao true

Método some() -> testa se ao menos um dos elementos no array passa na
condição e retorna um valor true ou false


const ages = [12, 15, 18, 23, 45, 57]
const result = ages.some((age) => age >= 18)
console.log(result)

Método reduce() -> é utilizado para reduzir um array a um
único valor. Parâmetros: array original (values), acumulador
(accumulator), valor da iteração (currentValue), valor inicial
(0), Index (index da iteração atual - opcional)


const values = [1, 2, 3, 4, 5]

const sum = values.reduce((accumulator, currentValue, index) => {
    console.log("Acumulador: ",accumulator)
    console.log("Valor Atual: ",currentValue)
    console.log("Index: ", index)
    console.log("Soma: ", accumulator + currentValue)
    console.log("##################")
    return accumulator + currentValue
//valor inicial
}, 0)

console.log("Resultado final =", sum)
*/