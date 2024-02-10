const express = require('express');
const router = express.Router();
const Vendedor = require("../models/Vendedor")

router.get("/", async (req, res) => {
    try {
        const vendedores = await Vendedor.find();
        res.json(vendedores)
    } catch(error){
        res.status(500).json({error: "Error al obtener los vendedores"})
    }
})

router.post("/", async(req, res) => {
    try{
        const nuevoVendedor = new Vendedor(req.body);
        await nuevoVendedor.save()
        res.json(nuevoVendedor)
    } catch (error){
        res.status(500).json({error: "Error al crear el vendedor"})
    }
})

router.put("/:id", async(req,res) => {
    try{
        const vendedor = await Vendedor.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(vendedor)
    }catch(err){
        res.status(500).json({error: "Error al actualizar el vendedor"})
    }
})

router.delete("/:id", async(req,res) => {
    try{
        await Vendedor.findByIdAndDelete(req.params.id)
        res.json({message: "Vendedor eliminado correctamente"})
    } catch(err){
        res.status(500).json({error: "Error al eliminar al vendedor"})
    }
})

module.exports = router