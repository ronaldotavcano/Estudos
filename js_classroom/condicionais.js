//CONDICIONAl ternario
// 1)condição 2)? = indica oq deve acontecer se for 
//verdade 3) : = indica oq acontece se for falso

let age = 21
console.log(
    age >= 18 //condição
    ?"Você pode dirigir" //se verdadeiro
    :"Você não pode dirigir"//se falso
    )

/*FALSY quando um valor é considerado false e TRUTHY
é considerado verdadeiro em contextos onde um boolean
é obrigatório(loops e condicionais)*/

//console.log("###EXEMPLOS DE FALSY###");
//console.log(false ? "VERDADEIRO" : "FALSO");
//console.log(0 ? "VERDADEIRO" : "FALSO");
//console.log(-0 ? "VERDADEIRO" : "FALSO");
//console.log("" ? "VERDADEIRO" : "FALSO");
//console.log(null ? "VERDADEIRO" : "FALSO");
//console.log(NaN ? "VERDADEIRO" : "FALSO");
//console.log(undefined ? "VERDADEIRO" : "FALSO");
//
//console.log("###EXEMPLOS DE TRUTHY###");
//console.log(true ? "VERDADEIRO" : "FALSO");
//console.log(1 ? "VERDADEIRO" : "FALSO");
//console.log(-1 ? "VERDADEIRO" : "FALSO");
//console.log({} ? "VERDADEIRO" : "FALSO");
//console.log([] ? "VERDADEIRO" : "FALSO");
//console.log(3.23 ? "VERDADEIRO" : "FALSO");
//console.log("0" ? "VERDADEIRO" : "FALSO");
//console.log(" " ? "VERDADEIRO" : "FALSO");
//console.log(Infinity ? "VERDADEIRO" : "FALSO");
//// NaN -> not a number, " " -> espaço é um caracter


//IF

let hour = 13

if(hour < 12){
console.log("bom dia");
console.log("Seja bem-vindo");
} else{
console.log("Bora acordar bora acordar, sangue bom");  
}

let hour2 = 19

if(hour2 <= 12){
console.log("bom dia");
}

else if(hour2 > 18 && hour2 < 22){ //elif
    console.log("boa noite");
}
else{
    console.log("boa madrugada");
}

// ESTRUTURA SWITCH

let option = 1

switch (option) {
    case 1: 
        console.log("Consultar pedido")
        break
    case 2:
        console.log("Falar com Atendente")
        break
    case 3:
        console.log("Cancelar pedido")
        break
    default: //seria um else do switch
        console.log("Opção inválida");
        
}

// TRATAMENTO DE EXCEÇÕES
/*uma estrutura de fluxo que vai ser 
baseada em um erro.Alguma coisa que acontece 
durante o uso da aplicação que interrompe 
o fluxo normal de operações. ex: falha no banco
de dados*/


/*
try{
    //tenta executar algo
    console.log(result)
} catch(error){ //() é uma variável temporária
    //captura o erro
    console.log("Não foi possível executar seu comando")
} finally{
    console.log("FIM")
}

let result = 1

try {
    if(result == 0){
        throw new Error("O valor é igual a 0")
    }
}catch (error){
    console.log(error)
}finally{
    console.log("FIM")
}

*/