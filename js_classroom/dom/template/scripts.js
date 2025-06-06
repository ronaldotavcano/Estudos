// Visualizar o conteúdo do document.
//console.log(document)

/* Parte 1

// Obter o title da página;
console.log(document.title)

//Acessar elemento pelo Id (SELETOR ID)
const guest = document.getElementById("guest-2")
console.log(guest)

// Mostra as propriedades dos elementos
console.dir(guest)

//Acessar elemento pela classe (SELETOR CLASS)
const guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass)

// Exibir o 1 elemento
console.log(guestsByClass.item(0))
console.log(guestsByClass[1])

// Selecionar lista elementos tag
const guestsTag = document.getElementsByTagName("li")
console.log(guestsTag)

console.log('---------------------------------------')

// Acessa o elemento pelo seletor Id
const guest1 = document.querySelector("#guest-1")
console.log(guest1)

// Acessa o elemento pelo seletor class
const guest2 = document.querySelector(".guest")
console.log(guest2)*/

//const guest = document.querySelector("#guest-1")
//console.log(guest.textContent) // retorna o conteudo visivel e invisivel /. é para acessar uma propriedade da variavel
//console.log(guest.innerText) // retorna somente o conteudo visivel
//console.log(guest.innerHTML) // REtorna o html como texto

//const input = document.querySelector("#name")
// ADD CLASSE
//input.classList.add("input-error") 
// REMOVER CLASSE
//input.classList.remove("input-error")

// Se nn existe -> add, se existe -> remove
//input.classList.toggle("input-error")

//const button = document.querySelector("button")
//button.style.backgroundColor = "red"
/*
const guests = document.querySelector("ul")
console.log(guests)

const newGuest = document.createElement("li")
// ADD classe ao elemento
newGuest.classList.add("guest")
const guestName = document.createElement("span")

guestName.textContent = "Diego"

//Adiciona após o último filho
newGuest.append(guestName)

// ADD a ul
guests.append(newGuest)*/


// MANIPULAR ATRIBUTOS
/*
const input = document.querySelector("input")

// ADD atributos -> (nome, valor)

//input.setAttribute("type", "file")

//Remover aributo
//input.removeAttribute("id")

// EVENTOS
// ADD um método que vai observar tudo oq acontece com a janela
window.addEventListener("load", ()=>{
    console.log("A página foi carregada")
})

// pega direto no DOM
addEventListener("click", (event) =>{
    // remove as caracteristicas iniciais
    //event.preventDefault()

    //REtorna o elemento clicado
    console.log(event.target)
    //REtorna o textContent do elemento clicado
    console.log(event.target.textContent)
})*/