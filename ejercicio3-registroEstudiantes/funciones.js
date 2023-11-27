const readline = require("readline-sync") //Importamos el modulo readline y utilizamos su funcion readline.question la cual hace lo mismo que prompt pero para nodejs

const registrarEstudiantes = () => {
    console.log("Iniciando registro de estudiantes");

    const cantidadEstudiantes = readline.question("Ingresar cantidad de estudiantes a registrar: ")

    const estudiantes = []
    
    for(let i = 0; i<cantidadEstudiantes; i++){
        let nombreEstudiante = readline.question(`Ingrese el nombre del estudiante ${i+1}: `)

        let edad = readline.question(`Ingrese la edad del estudiante ${i+1}: `)

        let estudiante = {
            nombre: nombreEstudiante,
            edad: edad
        }
        
        estudiantes.push(estudiante)

    }

    return estudiantes
}

const mostrarEstudiantes = (lista) =>{
    for(estudiante of lista){
        console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`)
    }
}

module.exports = {registrarEstudiantes, mostrarEstudiantes}