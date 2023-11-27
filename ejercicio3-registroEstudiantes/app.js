const {registrarEstudiantes, mostrarEstudiantes} = require("./funciones")

let estudiantesRegistrados = registrarEstudiantes();

mostrarEstudiantes(estudiantesRegistrados)