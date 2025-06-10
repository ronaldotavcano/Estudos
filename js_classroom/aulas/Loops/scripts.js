/*
    Repetições -> Executa um bloco de código várias vezes,
    de acordo com uma condição específica.

    While -> executa enquanto a condição for verdadeira


let execute = true

while (execute){
    let response = window.prompt("Deseja continuar: 1 (SIM) ou 2 (NÃO)")
    if (response === "2"){
        execute = false
        console.log("VAZA IRMÃO...")
    }2
}*/
console.log("Segue o fluxo")

/* Loop infinito 

let value = true

while(value){
    console.log("Executando while")
}

     TRAVA O PC
*/

/*
    DO WHILE: repete até que a condição específica seja True
    .No entanto, a instrução será executada pelo menos uma
    vez antes da condição ser verificada
*/

let value = 11
do{
    value++ // aumentou 1
    console.log(value) // printou no console 12
}while (value < 10) // conferiu se 12 entra no requesito

    console.log("Encerrando loop")

/*  
    FOR -> repete até que a condição seja falsa. Trás:
    - variável de controle (Vc)
    - condição
    - incremento ou decremento da variável de controle
*/

// 1º i -> index (Vc)
// 2º -> condição
// 3º incremento ou decremento
for (i = 0; i < 10; i++) {
    console.log(i)
}

// Exemplo de tabuada

let number = 7

for (i = 0; i < 11; i++) {
    console.log(`${number} X ${i} = ${7*i}`)
}

/*
    FOR IN -> executa interações a partir de um objeto e 
    percorre as propriedades
*/

let person = {
    name: "Ronaldo",
    surname: "Cano",
    email: "Ronaldo@gmail.com",
}



// Estou percorrendo as propriedades dentro do objeto
for (let property in person){

    // exibe o nome da propriedade
    console.log(property)

    // exibe o conteudo da propriedade
    console.log(person[property])

    //exibe os 2
    //console.log(`${property} -> ${person[property]}`)
}

let students = ["Rodrigo", "João", "Pedro"]


for (let student in students) {
    console.log(` ${student}º ${students[student]}`)
}

// FOR OFF -> percorre em sobre os valores de um objeto percorrível

let monkeys = ["Chimpanzé", "Mico", "Gorila"]

for (let monkey of monkeys) { // in mostraria -> 0,1,2
    console.log(monkey)// of mostra o conteudo
}

let user = {
    name:"Benny",
    city: "Bennylândia",
    state: "Guiana Brasileira"
}
/*
for (let value of user) { 
    console.log(value)// Retorna que nn é iteravel/percorrido
}


    BREAK -> encerra a execução da repetição ou switch para
    seguir parta a instrução seguinte
*/

let option = 2

switch(option){
    case 1:
        console.log("Cadastrar")
        break
    case 2:
        console.log("Login")
        break
    case 3:
        console.log("Comprar")
        break
    default:
        console.log("Opção inválida")
        break
}

// usando o break para finalizar repetição

for(let k = 0; k < 10; k++) {

    if (k === 5){
        break // quebrou aqui
    }
    // não aparece até o 9, vai do 0 ao 4
    console.log(k)
}

/*
    CONTINUE -> encerra (pula) a execução das instruções na
    iteração atual e continua a execução do loop com a 
    próxima iteração
*/
console.log("==== CONTINUE ====")

for (let l = 0; l < 10; l++){

    if (l === 5){ // pulou do 4 para o 6
        continue
    }
    console.log(l)
}