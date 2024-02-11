const express = require('express');
const { auth } = require('express-oauth2-jwt-bearer');
const errorHandler = require("./middleware/errorHandler")

const productosRouter = require('./routes/productos')

const jwtCheck = auth({
    audience: 'http://localhost:3000/api/productos',
    issuerBaseURL: 'https://dev-vofco1m1kjhkyflm.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });

const app = express();

//Validar en todas las rutas
//app.use(jwtCheck)

app.get("/", (req, res)=>{
    res.send("API de productos")
})

app.use(express.json())

app.use("/api/productos", jwtCheck, productosRouter)

app.use(errorHandler)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`API de productos escuchando en el puerto ${PORT}`)
})