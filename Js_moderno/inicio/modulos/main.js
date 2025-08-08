/*
ES Modules -->

ESM é o sistema de modulos de javascript, define um formato
para organizar e estruturar o código em módulos, permitindo
a modularização e reutilização de código.

Principais características:

-Módulos: encapsulamento de código em módulos permitindo a
separação de responsabilidades e reutilização de código.

-import: usado para incluir módulos
-export: usado para expor funcionalidades de um módulo
para outros.
 */

// importar funções     de onde eu importo
// sintaxe de importação separada
/*import {sum, multiply} from "./calc.js"*/
// importar todas as funções que o modulo exporrta
/*import soma, {multiply} from "./calc.js"
                        //default deixa eu por o nome q eu quiser
console.log("4 + 6 =", soma(4, 6))
console.log("4 X 6 =", multiply(4,6))
console.log("4 - 6 =", minus(4,6))*/

import { Calc} from "./calc.js"

const calc = new Calc()

console.log("4 + 6 =", calc.sum(4,6))
console.log("4 - 6 =", calc.subtract(4,6))



