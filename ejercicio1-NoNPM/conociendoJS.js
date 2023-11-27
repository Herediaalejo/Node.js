const registrarEstudiantes = () => {
    console.log("Iniciando registro de estudiantes");

    const cantidadEstudiantes = prompt("Ingresar cantidad de estudiantes a registrar: ")

    const estudiantes = []
    
    for(let i = 0; i<cantidadEstudiantes; i++){
        let nombreEstudiante = prompt(`Ingrese el nombre del estudiante ${i+1}: `)

        let edad = prompt(`Ingrese la edad del estudiante ${i+1}: `)

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

let estudiantesRegistrados = registrarEstudiantes();

mostrarEstudiantes(estudiantesRegistrados)


