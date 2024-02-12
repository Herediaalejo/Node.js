const Producto = require("../models/Producto");

exports.getAllProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProductoById = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({ message: "Producto no encontrado" });
            return;
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createProducto = async (req, res) => {
  try {
    const newProducto = await Producto.create(req.body);
    res.status(201).json(newProducto);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

exports.updateProducto = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!producto) {
            res.status(404).json({ message: "Producto no encontrado" });
            return;
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteProducto = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndDelete(req.params.id);
        if (!producto) {
            res.status(404).json({ message: "Producto no encontrado" });
            return;
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};