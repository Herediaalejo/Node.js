const express = require('express')
const router = express.Router()
const Libro = require('../models/Libro');
const { requiredScopes }  = require('express-oauth2-jwt-bearer');

router.get("/", requiredScopes("read:libros"), async(req, res, next) => {
    try{
        const libros = await Libro.find();
        if(libros.length > 0){
            res.json(libros)
        } else {
            const error = new Error("No se han encontrado libros")
            error.status = 404
            throw error
        }

    } catch (err) {
        next(err)
    }
})

router.get("/:id", requiredScopes("read:libros"), async(req, res, next) => {
    try{
        const libro = await Libro.findById(req.params.id)
        if(!libro){
            const error = new Error('Libro no encontrado');
            error.status = 404;
            throw error;
        } 
        res.json(libro)
    } catch(err){
        next(err)
    }
})

router.post("/", requiredScopes("write:libros"), async (req, res, next) => {
    try {
        const libro = new Libro(req.body); // Crear instancia del libro

        try {
            await libro.validate(); // Validar el libro
        } catch (validationError) {
            // Si hay errores de validación, generar un nuevo error con un mensaje personalizado
            const error = new Error('Error de validación: ' + validationError.message);
            error.status = 400;
            throw error;
        }

        await libro.save(); // Guardar el libro en la base de datos
        res.json({ message: "Libro guardado con éxito" });
    } catch (err) {
        next(err);
    }
})

router.put("/:id", requiredScopes("write:libros"), async(req, res, next)=>{
    try{
        let modificado;
        try {
            modificado = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        } catch (updateError) {
            throw updateError; 
        }
        res.json(modificado)
    } catch (err) {
        next(err)
    }
})

router.delete("/:id", requiredScopes("write:libros"), async(req, res, next)=>{
    try{
        const libroEliminado = await Libro.findByIdAndDelete(req.params.id)
        if(libroEliminado){
            res.json({message: "Libro eliminado con exito"})
        }else{
            const error = new Error("Libro no encontrado")
            error.status = 404
            throw error
        }
    } catch(err) {
        next(err)
    }
})

module.exports = router