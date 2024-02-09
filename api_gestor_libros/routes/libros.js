const express = require('express');
const router = express.Router();
const libros = require('../data');
const Joi = require('joi');


router.get("/", (req, res, next) =>{
    try{
        res.json(libros);
    } catch(error){
        next(error)
    }
})

const libroSchema = Joi.object({
    titulo : Joi.string().required(),
    autor : Joi.string().required()
})

router.get("/:id", (req, res, next) =>{
    try{
        const id = req.params.id
        const libroEncontrado = libros.find(libro => libro.id == id)
        if(!libroEncontrado){
            const error = new Error('Libro no encontrado');
            error.status = 404;
            throw error;
        } 
        res.json(libroEncontrado);

    } catch(error){
        next(error)
    }
})

router.post("/", (req, res, next) =>{
    try {

        const { error, value } = libroSchema.validate(req.body);
    
        if (error) {
            const validationError = new Error('Error de validación');
            validationError.status = 400;
            validationError.details = error.details.map(detail =>
            detail.message);
            throw validationError;
        }

        const {titulo, autor} = value;
        // Si los datos son válidos, proceder con la creación del nuevo libro
        const nuevoLibro = {
            id: String(libros.length + 1), // Generar un nuevo ID para el libro
            titulo,
            autor
        };
        libros.push(nuevoLibro);
        res.status(201).json(nuevoLibro);
        
    } catch (error){
        next(error)
    }
})

router.put("/:id", (req, res, next) =>{
    try{
        const id = req.params.id;
        const { error, value } = libroSchema.validate(req.body);
        if(error){
            const validationError = new Error('Error de validación');
            validationError.status = 400;
            validationError.details = error.details.map(detail =>
            detail.message);
            throw validationError;
        }
        const {titulo, autor} = value;
        const libro = libros.find(libro=>libro.id == id)

        if(!libro){
            const error = new Error('Libro no encontrado');
            error.status = 404;
            throw error;
        } 

        libro.titulo = titulo
        libro.autor = autor
        res.json(libro)
    
    } catch (error) {
        next(error)
    }
})

router.delete("/:id", (req, res, next) =>{
    try{
        const id = req.params.id;
        const index = libros.findIndex(libro=>libro.id == id)
        if (index == -1) {
            const error = new Error('Libro no encontrado');
            error.status = 404;
            throw error;
        } 

        libros.splice(index, 1);
        res.json({ mensaje: "Libro eliminado correctamente" });  
         
    } catch(error){
        next(error)
    }
})

module.exports = router;

