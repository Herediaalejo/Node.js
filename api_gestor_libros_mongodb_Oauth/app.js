const express = require('express')
const app = express();
const router = require('./routes/libros')
const errorHandler = require('./middleware/errorHandler')
const { auth } = require('express-oauth2-jwt-bearer');

const jwtCheck = auth({
    audience: 'http://localhost:3000/api/libros',
    issuerBaseURL: 'https://dev-vofco1m1kjhkyflm.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });

app.use(express.json())

app.use("/api/libros", jwtCheck, router)

app.use(errorHandler)

app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000")
})