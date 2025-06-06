/* PARTE 2

                     EVENTOS EM UM ELEMTENTO
const ul = document.querySelector("ul")


ul.addEventListener("scroll", () =>{
    //verifico a distancia dela até o topo
    console.log(ul.scrollTop)

    if(ul.scrollTop > 302.5){
        console.log("Fim da Lista")

        ul.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
})

const button = document.querySelector("button")

button.addEventListener("click", (event) =>{
    event.preventDefault()
    console.log("Clicou")
})
                   EVENTOS EM UM FORMULÁRIO

const form = document.querySelector("form")

form.onsubmit = (event) =>{
    event.preventDefault()
    console.log('Você fez um submit no formulário #1')
}

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    console.log('Você fez um submit no formulário #2')
})
                EVENTOS INPUT
const input = document.querySelector("input")

// keydown - qnd a tecla é pressionada(captura tudo, ctrl, shift)
//input.addEventListener("keydown", (event) =>{
//    console.log(event.key)
//})

//keypress - quando uma tecla do tipo caracter é presionada(letras,numeros,pontos)
//input.addEventListener("keypress", (event) =>{
//    console.log(event.key)
//})


input.onchange = () => {
    inputChange()}

function inputChange(){
        console.log("O INPUT MUDOU")
}
                COMPREENDENDO EXPRESSÕES

 É utilizado para validar um conjunto de caractere
EX: 53A7B5C
 /                       \D                                     +                                                      /                    g 
 inicio do padrao        qq caracter sem ser digito           indica que pode ser repetido mais de uma vez          fim do padrao           modificador global, é usado em expressões regulares            
 FERRAMENTA REGEX

 const input = document.querySelector("input")
 const form = document.querySelector("form")

 //input.addEventListener("input"), () => {
    //const value = input.value 
    //const regex = /\D+/g
    //console.log(value.match(regex)) -> retorna o conteudo da str
    //const isValid = regex.test(value)
    //console.log(isValid)
//}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const value = input.value
    const regex = /\D+/g

    if (regex.test(value)){
        console.log(value);
    }else{
        alert("Valor inválido")
    }
    //const value = input.value.replace(regex, "")
    //console.log(value)
})*/

//   Depuração ou debug(encontrar erros)

/*breakpoints -> é um ponto no código fonte onde a execução do
programa será pausada quando atingir esse ponto específico.
Inspecionar -> examinar o código fonte*/

const input = document.querySelector("input")
const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault()

    const value = input.value
    const regexHasNumber = /\d+/g

    if(regexHasNumber.test(value)){
        alert("O texto contém números")
    }else{
        alert("Cadastro enviado")
    }
}