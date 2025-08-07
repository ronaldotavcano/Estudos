/*
    Classes -> No Js as classes são uma forma de criar objetos
    e definir seu comportamento por meio de construtores e métodos
    Elas foram introduzidas no ECMAScript 2015 (também conhecido
    como ES6) para fornecer uma sintaxe mais amigável para a criação
    de objetos e herança de protótipos(syntax sugar).

    Construtores e métodos -> Uma classe é basicamente um modelo para
    criar objetos. Ela contém um construtor, que é um método especial
    chamado quando um objeto é instanciado a partir da classe. Além do
    construtor, você pode adicionar métodos a uma classe. Métodos são
    funções associadas a objetos e descrevem o comportamento desses
    objetos.

    Herança -> Uma classe pode herdar propriedades e métodos de outra 
    classe, permitindo a reutilização de código.
*/

class Person {
    constructor(name){
        console.log("Olá", name)
    }
}

const people = new Person("Ronaldo")

class Product {
    constructor(name){ // this significa o contexto que eu estou inserindo
        this.name = name; // nesse caso, da classe Product
    }
}

const product1 = new Product("Bolacha")
console.log(product1.name)

const product2 = new Product("Água")
console.log(product2.name)

class User{
    constructor(id, email){
        this.id = id
        this.email = email
    }

    sendEmail(){
        console.log("Email enviado para", this.id, "no endereço", this.email)
    }
}

const user = new User("Ronaldo", "ronaldo@gmail.com")
user.sendEmail()

// Método Estático

class Animal {
     static showMessage(){
        console.log("Wof-Wof")
    }
}

// dá certo por conta do static, acessado sem instanciar a classe
// não da certo com método construtor
Animal.showMessage()

// Como aplicar a herança

class Animals {
    constructor(name){
        this.name = name   
    }

    makeNoise() {
        console.log("Algum som genérico")
    }
}

class Dog extends Animals {
    makeNoise() {
        console.log("Woof! Woof!")
    }
}

const dog = new Dog("Rufus")
console.log(dog.name)
dog.makeNoise()

/*
    Classes x Prototype -> Javascript é dinâmico e não dispõe
    de uma implementação de uma class(a palavra-chave class foi
    introduzida no ES2015, mas é syntax sugar, o Js permanece
    baseado em prototype)

    Prototype -> Quando se trata de herança, o Js tem somente um
    construtor: objetos. Cada objeto tem um link interno para um 
    outro objeto chamado prototype.

    O objeto prototype também tem um atributo prototype, e assim
    por diante até que o valor null seja encontrado como sendo o
    seu prototype. O null que, por definição, não tem prototype
    e age como um link final nesta cadeia de protótipos (prototype chain)

    Ex:
    ['Ronaldo', 'João', 'Ana'] -> Array.prototype -> Object.prototype -> null

    Quando um objeto é criado ele possui automaticamente uma 
    propriedade que referência outro objeto e esse objeto é
    chamado prototype. O objeto prototype herda as propriedades
    e métodos do seu próprio antecessor. Essas propriedades não
    pertencem ao objeto em si, mas sim ao prototype do objeto.
    O prototype é o mecanismo pelo qual os objetos Js herdam
    recursos uns dos outros. A cadeia termina quando chegamos
    a um protótipo que tem null por protótipo. Um objeto pode
    utilizar qualquer propriedade ou método que existir nesse
    encadeamento de Protótipos.
*/

const address = {
    city: "São Paulo",
    country: "Brazil",
}

console.log(address)

// Lidar com exceções

let obj = [17]
let index = 300

try {
   //obj.execute() // classe TypeError
   // caso não exista o 17
   if (!obj.includes(17)){
    throw new Error("O núm 17 não está disponível")
   }
   // não entra aqui o throw é semelhante ao return
   if (index > 99) {
    throw new RangeError("Número fora do intervalo, escolha entre 0 e 99")
   }

} catch (error) {
    if(error instanceof TypeError){
        console.log("método indisponível")
    }
    console.log(error)
}

// Erro personalizado

class MyCustomError{
    constructor(message){
        this.message = "CLASSE DE ERRO PERSONALIZADO: " + message
    }
}

try {
    throw new Error("Erro genérico")//cai no else

    throw new MyCustomError("Erro lançado")// cai no MyCostumeError
} catch (error) {
    if (error instanceof MyCustomError){
        console.log(error.message)
    }else{
        console.log("Não foi possível executar")
    }
}