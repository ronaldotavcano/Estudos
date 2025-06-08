let message = "Estou estudando os fundamentos do Js"

console.log(message)

// Exibir em maiusculo (Metodo)
console.log(message.toUpperCase())

// Exibir em mminusculo (Metodo)
console.log(message.toLowerCase())

/*
    Nenhum dos dos métodos altera a string, apenas altera 
    a exibição
*/

//Comprimento de uma string -> Propriedade length
// considera os espaços tambem
console.log(message.length)

// EX prático

let password = "12345"

if(password.length < 6){
    console.log("Sua senha deve ter no mínimo 6 caracteres")
}

// Quantos dígitos tem um numero?

let value = 12345
console.log(String(value).length) // os dois são iguais
console.log(value.toString().length)

// Substituir parte de um texto
// conteudo não é alterado
console.log(message.replaceAll(" ","-")) /*Todos*/
console.log(message.replace("js","html")) /*Apenas o 1 que aparecer*/

// Extraindo uma parte da String (start, end)
// Exibir onde começa e onde termina
console.log(message.replace("e", "E").slice(6,30))

// Extraindo de trás para frente

console.log(message.slice(-2))

let textWithSpace = "   Texto de Exemplo        "
console.log(textWithSpace.length)

// Remove espaços em branco no inicio e no final
console.log(textWithSpace.trim())
console.log(textWithSpace.trim().length)

const creditCard = "1234567812344928"
console.log(creditCard.length)

const lastDigits = creditCard.slice(-4)
console.log(lastDigits)

// método padStart preenche a string a partir do início
// usamos dois parametros: tamanho e oq eu quero preencher
const maskedNumbers = lastDigits.padStart(creditCard.length, "X")
console.log(maskedNumbers)

let text = "Estudar, Aprender, Praticar"

// Separar texto

let separate = text.split(",")
console.log(separate)
// Gerou um array(lista) 

let finalMessage = "Aprendendo Javascript"
console.log(finalMessage.split(" "))

// Unir texto

let joined = separate.join("-") // usa o entre "" como juntor
console.log(joined) // volta o texto original

// Obter a posição da palavra

console.log(message.indexOf("estudando")) // Qnd ele nn encontra retorna -1

// Verificar se existe a palavra no texto

console.log(message.includes("estudando"))
console.log(message.toLowerCase().includes("estudando"))