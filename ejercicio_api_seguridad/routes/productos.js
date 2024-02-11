const express = require("express");
//const schemaProducto = require("../models/producto");
//const data = require("../data/data");
const { requiredScopes }  = require('express-oauth2-jwt-bearer');
const routerProductos = express.Router();

let data = [
    {id: 1, nombre: "producto 1", precio: 10.99},
    {id: 2, nombre: "producto 2", precio: 17.99},
    {id: 3,nombre: "producto 3", precio: 12.29}
]

routerProductos.get("/",requiredScopes("read:productos"), (req, res,next) => {
    try{
        res.json(data);

    }catch(err){
        next(err)
    }
});

routerProductos.get("/:id",requiredScopes("read:productos"), (req, res) => {
    const producto = data.find((producto) => producto.id == req.params.id);
    res.json(producto);
});

routerProductos.post("/", requiredScopes("write:productos"), (req, res,next) => {
    try{
        const producto = req.body;
        producto.id = data.length + 1;
        data.push(producto);
        res.json(producto);
    }catch(err){
        next(new Error("El producto no se pudo crear"));
    }
});

routerProductos.put("/:id",requiredScopes("write:productos"), (req, res,next) => {
    try{
        const producto = data.find((producto) => producto.id == req.params.id);
        const productoModificado = req.body;
        productoModificado.id = producto.id;
        data.splice(producto.id - 1, 1, productoModificado);
        res.json(productoModificado);
    }
    catch(err){
        next(new Error("El producto no existe"));
    }

});

routerProductos.delete("/:id",requiredScopes("write:productos"),  (req, res,next) => {
    try{
        const producto = data.find((producto) => producto.id == req.params.id);
        data.splice(producto.id - 1, 1);
        res.json(producto);
    }catch(err){
        next(new Error("El producto no existe"));
    }
});

module.exports = routerProductos;