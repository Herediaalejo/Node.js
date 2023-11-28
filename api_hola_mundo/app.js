const http = require("http"); //Utilizamos módulo http

const hostname = "127.0.0.1"; //Establecemos el hostname el cual es lo mismo que localhost
const port = 3000; //Establecemos el puerto

const server = http.createServer((req,res)=> {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end('{ "mensaje": "Hola Mundo!!"}');
}) //Simulamos una respuesta http

server.listen(port,hostname, () =>{
    console.log(`Server iniciado en http://${hostname}:${port}`)

}) //Iniciamos servidor
