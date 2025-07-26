//Strings

// Concatenancion

let nombre = "Jorge"

let saludo = "Hola " + nombre + " Luis"
console.log(saludo)

//Longitud

console.log(saludo.length)

//Acceso a caracteres

console.log(saludo[3])

//metodos comunes

console.log(nombre.toUpperCase())                        //cambia todo a mayusculas
console.log(nombre.toLowerCase())                        //cambia todo a minusculas
console.log(saludo.indexOf("Luis"))                      //lugar o indice donde empieza la palabra
console.log(nombre.includes("Jorge"))                    //verifica si esta palabra existe
console.log(saludo.slice(2,7))                           //toma una porcion del string
console.log(saludo.replace("Hola", "Como estas"))       //reemplaza una palabra por otra 

//template literal (plantillas)

let mensaje = `Hola ` + nombre + ` como estas            
hoy`                                                    //para usar saltos de linea en string usamos acento invertido ``

console.log(mensaje)

//para interpolar variables

console.log(`Hola ${nombre} como fue tu dia ayer? `)    //para interpolar variables necesitamos que el texto este entre los acentos invertidos y la variable comienza con el signo $ seguido de llaves y la variable dentro ${variable}