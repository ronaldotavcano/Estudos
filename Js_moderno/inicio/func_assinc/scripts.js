/* setTimeout() executa uma função após o intervalo de tempo
// especificado

setTimeout ( () =>{
    console.log("Olaa, tudo bem?")
}, 4000)// tempo em ms

// setInterval() -> executa uma função após um intervalo
// de tempo especificado

let value = 10;

const interval = setInterval(() => {
    console.log(value)
    value--

    if (value === 0){
       console.log("Happy new year")
       clearInterval(interval)// interrompe o intervalo de execuções 
    }
}, 1000)

FUNÇÕES ASSÍNCRONAS --> quando uma função assíncrona é chamada
ela retorna uma Promise. Quando a func assync retornar um
valor, a Promise será resolvida com o valor retornado. Quando
a func assync lança uma execução ou algum valor, a Promise será
rejeitada com o valor lançado. As func assync podem conter
uma expressão await, que pausa a execução da função assíncrona
e espera pela resolução da Promise passada, e depois retoma
a execução da função assíncrona e retorna o valor resolvido.

function asyncFunction(){
    return new Promise((resolve, reject) => {
        // simular uma operação assíncrona
        setTimeout(() =>{
            const isSucess = true
    
            if (isSucess) {
                resolve("A operação foi concluída")
            } else{
                reject("Algo deu errado")
            }
        }, 3000) // simula uma operação que leva 3s
    })
}

/* visualizar o retorno
//console.log(asyncFunction()) status pending
// espera a função ser executada e qnd rejeitar 
// cai no catch, se for concluida cai no then 
// e no finally independente
console.log("Executando função assíncrona")
asyncFunction()
  .then((response) =>{
    console.log("Success", response)
})
  .catch((error) => {
    console.log("Error: ", error)
})
  .finally(() => {
console.log("end of run")
})

// significa que vai lidar com async
async function fetch(){
    // await mostra que tem que esperar
    
    try{
        const response = await asyncFunction()
        console.log("Sucesso: ", response)
    } catch (error){
        console.log("Error: ", error)
    } finally{
        console.log("Fim da execução")
    }
}

fetch()

 outra forma de fazer
const fetch = async () => {
    const response = await asyncFunction()
    console.log(response)    
}

Javascript: características -->
    --single threaded: executa uma coisa por vez
    --no-blocking: não trava o contexto da execução
    --asynchronous: Por ser no-blocking precisa utilizar
    um paradigma assíncrono para lidar com a execução das
    coisas.
    --concurrent: As tarefas que executam assíncronamente
    concorrem uma com as outras pelo processamento

    Concorrência e Event Loop: o Js possui um modelo de con
    corrência baseado em um event loop responsável por geren-
    ciar a execução de código assíncrono eventos em um único 
    thread, permitindo que o Js seja não bloqueante

    Call stack -> armazena as chamadas de funções em execução
    quando uma função é chamada ela é empilhada no topo da
    pilha Tudo passa pela call stack. algumas tarefas são
    executadas nela mesma e outras somente passam por ela
    e será executada em uma Web APIs (Web apis -> utilização
    de outros recursos Ex: setTimeOut, DOM, fetch)

    Callback Queue -> é a fila que armazena as callbacks e os
    eventos que aguardam para serem processados(onClick
    on Load)

    Event loop -> verifica a pilha de call stack e callback
    se houver, um callback é removido da fila e colocado na
    pilha de chamadas para execução. Tudo passa pela callstack
    algumas tarefas serão resolvidas ne mesmo e outras
    somente irá passar pela Call Stack sem fazer nada e será
    resolvida em alguma Web APIs. O event loop é quem fica 
    checando constantemente a call stack e a callback queue

    Call Stack --> Web Api
    Call Stack <-- Event loop <-- callback queue

    Micro/Macro tasks: 2 tipos principais na fila callback

    Microtasks: São tarefas de alta prioridade que são exe-
    cutadas antes das Macrotasks (temporizadores e promises)

    Macrotasks: São tarefas de menor prioridade, como callbacks
    de eventos, setTimeOut e setInterval

    Resumo: execução do código -> eventos async -> verificação do Event loop -> microtaskts

*/

// (1) Executa o código de forma sincrona e o valor 1 é
//impresso imediatamente no console
console.log(1) 

// (3) Microtasks são executadas antes de temporizadores
//e de promises.
queueMicrotask( () => {
    console.log(2)
})

// (5) Macrotask que aguarda o evento de temporizador ser
// acionado
setTimeout( () => {
    console.log(3)
}, 1000)

// (2) Execução sincrona
console.log(4) 

// (4) Como a promise foi resolvida imediatamente ela foi
// add como uma microtask
Promise.resolve(true).then(() => {
    console.log(5)
})
