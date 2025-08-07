/*

Imutabilidade -> uma vez que algo imutável é criado você
não pode modificar seus valores ou propriedades. Em vez
disso, você cria uma copia modificada para manter o original 
inalterado.

Ex:

const address1 = {
    street: "Av. Sto Antonio",
    number: 10,
}
/*
[address2 recebe o 1, alterando o num de 20 para 30
address2 não é uma cópia é uma referencia, ou seja,
o 2 aponta pro mesmo lugar na memoria que o 1.]

const address2 = address1
address2.number = 30

Estratégias -> 2 maneiras de alterar dados, 1ª é mudar
o dado alterando diretamente seu valor. a 2ª é trocar o
dado antigo por uma nova cópia com as alterações feitas


const address2 = {...address1}
address2.number = 30
console.log(address2)

/* Na interface de criação a imutabilidade é utilizada
para otimizar a atualização do DOM (Document Object Model)
e para fornecer um modelo mais previsível no desenvolvimento
de interfaces UI

[DETECTAR MUDANÇAS] --> para detectar mudanças e obj mutados
é difícil , como eles são modificados diretamente a detecção
do que mudou exatamente requer um objeto mutado para ser
comparado com as cópias das suas p´roprias versóes anteriores
e a arvore inteira do objeto para ser cruzada. Detectar 
mudanças em objetos imutáveis é consideradamente fácil. Se ele
for diferente do anterior, concluímos que o objeto foi alterado

Benefícios --> como os dados imutáveis podem determinar fa
cilmente se ocorreram alterações, isso também ajuda a determinar
quando um componente deve ser renderizado novamente*/

// Aplicando imutabilidade

const address1 = {
    street: "Av St. Antonio",
    number: 20,
}

/* isso não é uma cópia, é uma referencia na memória
//const address2 = address1
//address2.number = 30
// mudou o número nos 2 objetos

//opção 1: cria um novo obj utilizando as propriedades 
// e valores do obj 1
//address2 = {...address1}
//address2.number = 30
agr temos obj diferentes e muda só o num do 2º*/

// opção 2
const address2 = {...address1, number:30}

//console.log(address1)
//console.log(address2)

//ex com array

const fruits1 = ["bananas", "apple"]
//const fruits2 = fruits1
// add nas 2 listas

// add somente na 2ª
const fruits2 = [...fruits1, "Orange"]
//fruits2.push("Orange")

//console.log(fruits1,fruits2)

/*
Shalow copy ->
*/

const htmlCourse = {
    course: "HTML",
    students: [{name:"Ronaldo", email: "ronaldo@gmail.com"}]
}

/* isso é uma referência
const jsCourse = {
    ...htmlCourse,
    course: "javascript",
}
*/
// o html add o joao tbm, pq students é um obj identado
//jsCourse.students.push({name: "João", email: "joao@gmail.com"})

// Deep copy

const jsCourse = {
    ...htmlCourse,
    course: "javascript",
    students: [...htmlCourse.students, {name: "Joao", email: "Joao@gmail.com"}]
}
// 2 forma de fazer
jsCourse.students.push({name: "Pedro", email:"pedro@gmail.com"})

//console.log(htmlCourse, jsCourse)

// para propriedades strings e numbers == shalow copy
// para coisas mais complexas deep copy

// Shallow freezing

const book = {
    title: "Objetos imutáveis",
    category: "Javascript",
    author: {
        name: "Ronaldo",
        email: "Ronaldo@gmail.com",
    },
}

// o Js em si não impoe restriçoes a modificacao do obj
//book.category = "HTML" --> isso alteraria o valor

//como impedir, congelando o obj book
//Object.freeze(book)
//book.category = "HTML" // não alterou nada


// Problema esse congelamento é raso
// o obj.freeze() não impede modificações profundas em
// objs aninhados
//book.author.name = "PEdro" // alterou o nome
//console.log(book)

// Deep freeze

const phone = {
    title: "Iphone 16 pro",
    category: "luxury",
    brand: {
        name: "Apple",
        email: "apple@gmail.com"
    },
}

function deepFreeze(object){
    // obtem um array com todas as props do 1 nvl
   const props = Reflect.ownKeys(object) 
   
   // itera sobre todas as props do obj
   for (const prop of props){
    // obtém o valor associado a propriedade atual
        const value = object[prop]
        // verifica se o valor é um obj ou func                                    // or 
        if(value && typeof value === "object" || typeof value ==="function"){
           deepFreeze(value) 
        }
   }
   // retorna o obj congelado
   return Object.freeze(object)
}

deepFreeze(phone)

phone.brand.email = "macaco@gmail.com" //não mudou
phone.category = "poor" //tbm nn mudou
console.log(phone)

const updatedBook = {
    ...book,
    title: "Criando um Front-end moderno com HTML",
    category: "HTML",
    type: "Programming"
}

// original
console.log(book)
// modificado
console.log(updatedBook)
// operador de desestruturação
const { category, ...bookWithoutCategory} = book
console.log(bookWithoutCategory)