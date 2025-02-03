console.log("Hola desde index.js")

let nombre = "Pepito"
let edad = 18
const CICLO = "DAW1"
let arrayEstudios = ["Informatica", "electricidad", "pfi"]
let mensaje = "El señor" + nombre + " tiene " + edad + " años "

console.log(mensaje)

// Sumamos un año
edad = edad + 1
console.log(mensaje)
mensaje = "Ahora tengo = " + edad + " años y estudio " + CICLO
console.log(mensaje)

//Arrays
console.log("Este es el  arrayEsatudios: ", arrayEstudios)
console.log("Es segundo elemento del array es: ", arrayEstudios[1])

//Objetos
let alumno = {
    nombre : "Paco",
    apellidos : "Sánchez Alcaraz",
    edad : 20
}
consol.log("Este es el objeto alumno: ", alumno)

consol.log("El nombre del alumno: ", alumno.nombre)

// Capturamos en variables los diferentes elementos de dom
const divcont1 = document.querySelector("#contenido1")
console.log("Este es el objeto correspondiente al div #contenido1: ", divcont1)
//Mostramos por consola el objeto en forma de texto
console.log(divcont1.innerHTML)

//Cambiamos el contenido de un elemento del dom
divcont1.innerHTML = "<h2>Nuevo contenido</h2>"

//Cambiamos el aspecto de 
divcont1.classList.remove("colorAgua")
divcont1.classList.add("colorMarron")

//Capturando valores del input
const miInput = document.querySelector("input")
console.log("el input es:", miInput.value)
miInput.value = "Otro texto"

//Capturar eventos
const botonEnviar = document.querySelector("#enviar")
botonenviar.addEventListener("click", alertaClick )
// Declarando funciones
function alertaClick(){
    console.log("has hecho click en el boton")
    alert("Has hecho click!!!")
}