const express = require("express");
const { requiredScopes } = require('express-oauth2-jwt-bearer');
const routerProductos = express.Router();
const ProductoController = require("../controllers/productoController");

routerProductos.get("/", requiredScopes("read:productos"), ProductoController.getAllProductos);

routerProductos.get("/:id", requiredScopes("read:productos"), ProductoController.getProductoById);

routerProductos.post("/", requiredScopes("write:productos"), ProductoController.createProducto);

routerProductos.put("/:id", requiredScopes("write:productos"), ProductoController.updateProducto);

routerProductos.delete("/:id", requiredScopes("write:productos"), ProductoController.deleteProducto);


module.exports = routerProductos;