// Se não vier export é como se a função fosse private 
// ou seja, só tem nesse arquivo

// significa que sum é exportado por padrão
/*export default function sum(a, b){
    return a + b
}

// named export - cada método é importado pelo seu proprio nome de exportação
export function multiply(a, b){
    return a * b
}

//outra forma sem usar o export
/*export{ sum, multiply}

// renomear exportação

function subtract(a, b){
    return a - b
}

export  { subtract as minus}*/

export class Calc {
    name = "Ronaldo"

    sum(a, b){
    return a + b
    }

    multiply(a, b){
    return a * b
    }

    subtract(a, b){
    return a - b
    }
}