//Recordatorio un array usa brakets [], un set usa parentesis ()
//Sintaxis de los array let nombre_array = [] ,    nombre array asignacion y entre corchetes valores

let myarray = []                //array vacio

console.log(myarray)

//Metodos comunes push y pop

//push() agrega elementos al final del array

myarray.push("Luis")
myarray.push("35")
myarray.push("Pedro")
myarray.push("Hola")
myarray.push(25)
myarray.push("Carlos")

console.log(myarray)

// pop() elimina el ultimo elemento y lo devuelve
myarray.pop()

console.log(myarray)

//elimina el ultimo elemento y lo guardamos en una variable si lo necesitamos
let ele_dev = myarray.pop()

console.log(myarray)

console.log(ele_dev)

//shift y unshift
//shift elimina el primer elemento del array y lo devuelve

let ele_borrado = myarray.shift()

console.log(ele_borrado)

//unshift agrega uno o varios elementos al inicio del array

myarray.unshift("Jorge", "Maria", 78)

console.log(myarray)

//propiedad length nos devuelve la cantidad de elementos en nuestro array

console.log(myarray.length)

//clear, para borrar o limpiar un array, solo debemos inicializarlos a vacio []

//myarray = []

console.log(myarray)

//slice, sirve para sacar una parte del array

let parte_array = myarray.slice(2,5)

console.log(parte_array)

//splice elimina parte de elementos del array recive 2 valores, donde principia y cuantos eliminar

myarray.splice(1,4)      //Aqui principio en el elemento 1 y borro 4 elementos

console.log(myarray)
