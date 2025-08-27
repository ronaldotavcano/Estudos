/*
API:
 Aplication Program Interface, é uma interface que disponibiliza um conjunto de funcionalidades
para serem utilizadas. EX: API de CEP, previsão do tempo,
cotação de moedas.

Cliente faz requisição para a API e a API busca no servidor
e devolve ao cliente.

Métodos Http:

get -> leitura
post -> criação
put -> atualização
delete -> deletar
patch -> atualização parcial

Json: é uma notação de objetos utilizado para representar 
dados. amplamente utilizado na comunicação entre servidores
e clientes.

Ex:
{
"user": {
        "id": 74345,
        "name": "Ronaldo T Cano",
        "address": {
            "street": "Rua A",
            "country": "Brazil",
        },
    }
}
    Para mudar a versão especifica:
    npm install json-server@(numeroDaVersão)

// https é qnd a API vem da internet
//const response = fetch("http://localhost:3000/products")
//console.log(response)// retorno é uma promise
// pq, pq eu fiz uma requisição pra api
fetch("http://localhost:3000/products").then( (response) =>{
    //converte para formato json
    // qnd a promise for resolvida ele retorna os dados
    response.json().then( (data) => {
        console.log(data)
    }) // exibe o resultado da API
}) */

// fetch + then é melhor pra quando eu não quero criar uma nova func
// Usando async e await (Principal)

async function fetchProducts(){
    const response = await fetch("http://localhost:3000/products")
    const data = await response.json()
    console.log(data)
}


async function fetchProductsById(id){
    const response = await fetch(`http://localhost:3000/products/${id}`)
    const data = await response.json()
    console.log(data)
}
//fetchProducts()
//fetchProductsById("1")

const productName = document.getElementById("name")
const productPrice = document.getElementById("price")
const form = document.getElementsByTagName("form")

addEventListener("submit", async(event) =>{
    event.preventDefault()
    
    // Requisição com método POST
    await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application-json"
        },
        // stringify -> é o método que existe aqui dentro do json, para poder serializar
        body: JSON.stringify({
            id: new Date().getTime().toString(),
            name: productName.value,
            price: productPrice.value,
        })
    })

    await fetchProducts()
})