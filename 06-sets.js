//Recordatorio un set usa parentesis (), un array usa brakets []
//Inicializacion de un set

//se declara una variable, se le asigna la palabra reservada new, a continuacion Set con mayuscula
//  y parentesis ejemplo  new Set()

let my_set = new Set()

console.log(my_set)

//Metodos comunes
// add y delete

my_set.add("Jorge")

console.log(my_set)

my_set.add("Luis")

my_set.add(23)

console.log(my_set)

// no acepta valores repetidos

my_set.add("Jorge")

console.log(my_set)

//delete
// necesita el dato a borrar, y luego lo borra y nos devuelve un boolean

let res = my_set.delete("Luis")

console.log(res)

//has es un metodo que nos devuelve un boolean

let q = my_set.has("Victor")        //si no existe es false

console.log(q)

let r = my_set.has(23)              //si existe es true

console.log(r)

//size es igual al tamaño

console.log(my_set.size)

//convertir set a array

let a_array = Array.from(my_set)      //crear una variable para el array asignar array con la propiedad from y dentro parentesis () el nombre del set

console.log(a_array)

//convertir array a set

my_set = new Set(a_array)           //crear el set asignar con la palabra reservada new set y entre parentesis () el nombre del array

console.log(my_set)