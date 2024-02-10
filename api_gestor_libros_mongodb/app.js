const express = require('express')
const app = express();
const router = require('./routes/libros')
const errorHandler = require('./middleware/errorHandler')

app.use(express.json())

app.use("/libros", router)

app.use(errorHandler)

app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000")
})