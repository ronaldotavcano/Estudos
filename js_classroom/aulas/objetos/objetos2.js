/*
    OPTIONAL CHAINING (?.) ->
    encadeamento opcional. Se a propriedade ou função chamada é nullish
    (null or undefined), a expressão retorna undefined em vez de gerar erro

    Útil ao explorar conteúdo de um objeto quando não existe garantia da
    existência de determinadas propriedades obrigatórias   
*/

const user = {
    id: 1,
    name: "ronaldo",
    age: 20,
    /*adress: {
        street: "Avenida Brasil",
        city: "Rio de Janeiro",
        geo: {
            latitude: 47.08,
            longitude: 12.65
        }
    },*/
    message: function (){
        console.log(`Olá, ${this.name}`)
    }
    
}
// optional chaining
console.log(user?.adress?.street)
user.message?.()

/*
    OPERADOR DE COALESCÊNCIA NULA (??)
    Operador lógico que retorna o seu operando do lado direito quando
    o seu operador do lado esquerdo é null ou undefined. Caso contrário
    ele retorna o seu operando do lado esquerdo.
*/

let content = null

// como content é nulo ele exibe o lado direito
console.log(content ?? "Conteudo padrão")
//Como content não é nulo exibe o lado direito
content = "Rodrigo"
console.log(content ?? "Conteudo padrão")

const userInfo = {
    name: "Peres",
    picture: undefined,
}

console.log(user?.picture ?? "default.png")
