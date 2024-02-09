const express = require('express');
const app = express();
const router = require('./routes/libros');
const errorHandler = require('./middleware/errorHandler')

app.use(express.json())

app.use("/libros", router)

app.use(errorHandler)

const puerto = 3000
const host = "127.0.0.1";

app.listen(puerto, host, () =>{
    console.log(`Servidor iniciado en http://${host}:${puerto}`)
})