//Funções

let username = "João" //não apareceu joão pq a função não pega esse escopo

//add o parâmetro
function message(username){
    console.log("Olá,", username)
}

//add argumento
message("Ana")

function sum(a,b){ //ordem dos parametros importa
    let result = a + b

    return result //retorna o resultado pra quem chama a função
}
let response = sum(7,8)
console.log(response)


//function jointext(text1, text2 ="", text3 =""){
//    console.log(text1, text2, text3)
//
//}
//jointext("Ronaldo", "Tavares", "Cano")
//jointext("Tavares", "Ronaldo", "Cano")
//jointext("Ronaldo") //os outros dois são undefined
//text2 e 3 ="" para tirar o undefined


//showMessage("Olá, Ronaldo")
//
//function showMessage(message){ //Comportamento de Hoisting, por isso da certo usar antes dela ser declarada
//    console.log(message)
//    endLine()
//
//    function endLine(){
//        console.log("--------")
//    }
//}
//showMessage("Tudo bem?")
//Ela nãpo existe fora do escopo dela{escopo = dentro da função}
//endLine()

/* ----- Comentário de Documentação ----- */

// * -> aceita qq valor
/**
 * 
 * @param {String} email user email.  // 
 * @param {String} password more than 6 charecters.
 * @returns {Number} user id.
 */

function signIn(email, password){
    // Fluxo de autentificação do usuário.

    return 7
}
signIn("ronaldotavarescano@gmail.com", "060905")

// Função Anônima

//const showMessage1 = function(){
//    return "Olá, Ronaldo"
//}
//console.log(showMessage1())


//const showMessage2 = function(name){
//    return "Olá," + name
//}
//console.log(showMessage2("Aldo"))

// Arrow Function (função de seta)

//const showMessage = () =>{
//    console.log("Olá")
//}
//console.log(showMessage)
//showMessage()

function execute(taskName, callback){
    console.log("Executando a tarefa: ", taskName)
    callback()
}

function callback(){
    console.log("Tarefa finalizada")
}
//Passando para a função
execute("Download de arquivo...", callback)

//criando no próprio parametro
execute("Upload do arquivo ...", function(){
    console.log("Função de Callback com uma função anônima")    
})
