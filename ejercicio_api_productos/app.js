const express = require('express');
const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send('¡Hola Mundo!')
})

/*app.get('/productos', (req, res) => {
    const categoria = req.query.categoria;
    const stock = req.query.stock;
    res.send(`Realizar busqueda de productos en la categoria "${categoria}" y con stock "${stock}"`);
})*/

app.get('/productos', (req, res) => {
    const authToken = req.header('Authorization');
    // Aquí puedes usar el authToken para autenticar al usuario o realizar validaciones adicionales
    res.send(`Token de autorización: ${authToken}`);
   });

app.get('/productos/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Informacion del producto con id ${id}`);
})

/* app.post("/productos", (req, res) =>{
    res.send("Producto creado correctamente")
})*/

app.post("/productos", (req, res) =>{
    const producto = req.body;
    res.json(producto)
})

app.put("/productos", (req, res) =>{
    res.send("Producto modificado correctamente")
})

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor Express.js en funcionamiento en el puerto ${port}`)
})
