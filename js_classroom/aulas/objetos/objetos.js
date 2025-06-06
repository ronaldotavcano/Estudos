/*
    OBJETO
        - uma coleção de dados e/ou funcionalidades;
        - Podem ter propriedades e métodos
*/

// Criando um objeto vazio
            // {} determina começo e fim do obj
const obj = {}
console.log(obj)
console.log(typeof obj)

// Criando objeto com propriedades e métodos
// Para objetos os bons modos são usar snake_case

const user = { // Dentro do obj para atribuir valores usa-se : ao invés de =
//  CHAVE      VALOR
    email: "ronaldo@email.com",
    age: 20,
    // Estrutura de obj aninhado(obj dentro do outro)
    name: {
        first_name: "Ronaldo",
        surname: "Cano"
    },
    address: {
        street: "Rua X",
        number: 23,
        city: "São Paulo",
        postal_code: "12700-155"
    },
    message: function(){
        console.log("Oi Ronaldo")
    },
}

// Acessando propriedades e métodos:
// Usando a notação de ponto.
console.log(user.name.first_name)  // Acessando propriedades
console.log(user.address.city)    // dos objetos
// Método
user.message()

// Usando colchetes

console.log(user["email"])
console.log(user["name"]["first_name"])
user["message"]



// Acessando propriedades no contexto do obj

const user1 = {
    name: "Ronaldo",
    message1: function () {
        //1) console.log(`Olá, ${user1.name}`)
        // so funciona para funcao anonima    
        // this -> acessa a propriedade dentro do contexto
        console.log(`Olá, ${this.name}`)
    }
}
user1.message1()

//Atualizar um obj

const product = {
    name: "teclado",
    quantity: 100
}
// acessando a propriedade
console.log(product.name)

// atualizar
console.log(product.quantity) //antes
product.quantity = 90
console.log(product.quantity)//dps