/* 
En JavaScript existen los operadores basicos siguientes

operadores aritmeticos
======================
suma +, resta -, multiplicacion *,division /, modulo %, exponente **
-----------------------------------------------------------------------------------------

operadores de incremento y decremento
=====================================
suma + valor (+=), resta - valor (-=), multiplicacion * valor (*=), division / valor (/=)
modulo % valor (%=), exponente ** valor (**=)
-----------------------------------------------------------------------------------------

operadores de comparacion
=========================
mayor que (>), menor que (<), mayor o igual que (>=), menor o igual que (<=)
igual a (==) evalua solo el valor.
igual a (===) evalua el valor y el tipo de dato
no es igual a (!=)
noe es igual a (!==)
-----------------------------------------------------------------------------------------
operadores logicos
==================
and (&&), or (||), not (!)
------------------------------------------------------------------------------------------
operadores ternarios
====================
? si se cumple una condicion
: si no se cumple una condicion
*/

// Ejemplos
//  operadores Aritmeticos
//============================================

let num1 = 5
let num2 = 8

let suma = num1 + num2
let resta = num1 - num2
let multiplicacion = num1 * num2
let division = num1 / num2
let modulo = num1 % num2
let exponente = num1 ** num2

console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)
console.log(modulo)
console.log(exponente)

//operadores incremento y decremento
//================================================

num1 = 4
num2 = 7

let suma1 = num1 + num2
let resta1 = num1 - num2
let multiplicacion1 = num1 * num2
let division1 = num1 / num2
let modulo1 = num1 % num2
let exponente1 = num1 ** num2

suma1 += 3
resta1 -= 4
multiplicacion1 *= 3
division1 /= 4
modulo1 %= 4
exponente1 **= 2

console.log(suma1)
console.log(resta1)
console.log(multiplicacion1)
console.log(division1)
console.log(modulo1)
console.log(exponente1)


//operadores de comparacion

let num4 = 7
let num5 = 6

let mayor = num4 > num5
let menor = num4 < num5
let mayor_igual = num4 >= num5
let menor_igual = num4 <= num5


console.log(mayor)
console.log(menor)
console.log(mayor_igual)
console.log(menor_igual)


// diferencia entre operadores == e ===

let nume1 = 7
let nume2 = "7"

let resultado = nume1 == nume2     // aqui evalua solo el valor
let resultado1 = nume1 === nume2   // aqui evalua el valor y el tipo de dato 

console.log(resultado)
console.log(resultado1)

//operador negacion

resultado = nume1 != nume2     // aqui niega el valor
resultado1 = nume1 !== nume2    

console.log(resultado)             
console.log(resultado1)
