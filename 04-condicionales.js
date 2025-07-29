//comenzamos con las condicionales

//condicional if, else if, else
//--------------------------------
let edad = 25

if (edad >= 18){

    console.log(`Tienes ${edad} años, eres mayor de edad`)
}else{ 
    console.log(`Tienes ${edad} años eres menor de edad`)
}

//condicional ternario

edad = 45

edad >= 18 ? console.log(`Tienes ${edad} años, eres mayor de edad`) : console.log(`Tienes ${edad} años eres menor de edad`)

//Switch

let dia = 9

let dia_semana

switch (dia) {

    case 0:
        dia_semana = "Lunes"
        break;
    case 1:
        dia_semana = "Martes"
        break;
    case 2:
        dia_semana = "Miercoles"
        break;
    case 3:
        dia_semana = "Jueves"
        break;
    case 4:
        dia_semana = "Viernes"
        break;
    case 5:
        dia_semana = "Sabado"
        break;
    case 6:
       dia_semana = "Domingo"
        break;
    default:
        dia_semana = "Numero de dia incorrecto"

}

console.log(`${dia_semana}`)