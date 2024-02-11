const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/biblioteca")

const libroSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true // El campo 'titulo' es obligatorio
    },
    autor: {
        type: String,
        required: true // El campo 'autor' es obligatorio
    },
}, {collection: "libros"})

const Libro = mongoose.model("Libro", libroSchema)

module.exports = Libro