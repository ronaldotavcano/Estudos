/*
// Data e hora atual
console.log(new Date()) // ano, mes(0 a 11), dia  

// 1ª data disponível no Js
console.log(new Date(0))

// Data que o Js usa de referência em ms
console.log(new Date().getTime())

// Defini data e hora  y   m  d  h   min  s
console.log(new Date(2025, 8, 6, 15, 30, 0o0))

// Desse jeito o mes vai de 1 a 12
console.log(new Date("2025-09-06T15:30:00"))

// obter dia da semana vai de 0 à 6
console.log(new Date().getDay())

// obter dia do mes, vai de 0 à 30
console.log(new Date().getDate())

// obter mês
console.log(new Date().getMonth() + 1)

// obter ano
console.log(new Date().getFullYear())

console.log("==== Modificando hora e data ====")

let date = new Date("July 3, 2025 15:00:00")
console.log(date)

//modificar ano
date.setFullYear(2030)
console.log(date)

//modificar mes
date.setMonth(8)
console.log(date)

//modificar dia
date.setDate(8)
console.log(date)

//modificar hora
date.setHours(17)
console.log(date)

//modificar minutos
date.setMinutes(15)
console.log(date)

//modificar segundo
date.setSeconds(30)
console.log(date)
*/

// Formatando data e hora

let date = new Date("2025-07-05T14:30:00")
// transformei em string e dps pad pra formatar qtns num e como completar
let day = date.getDate().toString().padStart(2, "0")
console.log(day)

// Mês
let month = (date.getMonth() + 1).toString().padStart(2, "0")
console.log(month)


let year = date.getFullYear()
let hour = date.getHours()
let minutes = date.getMinutes()

console.log(`DATA: ${day}/${month}/${year}`)
console.log(`Horário: ${hour}:${minutes}`)

// conversão para string específica

let data = new Date("2025-09-06T15:00:00")

//não muda nada visualmente
console.log(data.toString())
console.log("=========")
//Retorna só a data
console.log(data.toDateString())
console.log("=========")
//Retorna só a hora
console.log(data.toTimeString())
console.log("=========")

// formatar de acordo com a localidade
console.log(data.toLocaleDateString())
console.log(data.toLocaleTimeString())

// EXibe data e hora no formato escolhido
console.log(data.toLocaleDateString("en")) //EUA
console.log(data.toLocaleTimeString("en")) //EUA

// toLocaleString
console.log(data.toLocaleString())
console.log(data.toLocaleString("en"))

console.log(
    data.toLocaleString("pt-BR", {
    dateStyle: "short",
    })
)
console.log(
    data.toLocaleString("pt-BR", {
    dateStyle: "long",
    })
)

console.log(
    data.toLocaleString("pt-BR", {
    dateStyle: "medium",
    })
)

console.log(
    data.toLocaleString("pt-BR", {
    dateStyle: "full",
    })
)

let amount = 12.5

console.log(
    amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    })
)

/*
    Timestamp -> uma data é representada como um número. Esse
    número também é conhecido como timestamp(carimbo de data / hora).

    O timestamp é um valor que representa um ponto específico
    no tempo, geralmente expresso como uma contagem de segundos~
    ou milisegundos desde um momento de referência.

    Referência -> no Js é meia-noite de 1 de janeiro de 1970
    e elá está em milisegundos, padrão UTC.

    Fuso horário -> sempre há 2 maneiras: a local ou a universal
    Tempo Universal Coordenado(UTC), o fuso horário não é armazenado
    no objeto de data, mas é determinado pelo ambiente que está executando
    (dispositivo do usuário).

    Intl -> é a API de Internacionalização do ECMAScript
*/

// Obtém informações da localidade
const currencyLocale = Intl.DateTimeFormat().resolvedOptions()

console.log(currencyLocale)

// Exibi o formato de acordo com a localidade
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))
console.log(new Intl.DateTimeFormat("en-US").format(new Date()))


const today = new Date()

// fuso horário em min
console.log(today.getTimezoneOffset())

// fuso horário em horas
console.log(today.getTimezoneOffset() / 60)

//                                         data e hora    +   fuso
const dateWithTimezone = new Date("2025-06-10T19:12:21.069+03:00")

//console.log(dateWithTimezone.toISOString()) pedar oq coloca no new Date()
console.log(dateWithTimezone.toLocaleString())