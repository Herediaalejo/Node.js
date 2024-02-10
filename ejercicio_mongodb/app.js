//Importa y configura mongoose
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/empresa")

//Define el esquema y modelo de la tabla de clientes
const clienteSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    email: String,
});

const Cliente = mongoose.model("Cliente", clienteSchema)

//Crea un nuevo cliente
const nuevoCliente = new Cliente({
    nombre: "José",
    edad: 27,
    email: "jose@example.com",
})

//Guarda el cliente en la db
const result = nuevoCliente
    .save()
    .then(() => {
        console.log("Cliente guardado correctamente")
    })
    .catch((err) => {
        console.log(err);
    });

//Mostrar todos los clientes de la db
Cliente.find({})
    .then((clientes)=>{
        console.log("Clientes encontrados: ", clientes)
    })
    .catch((err) =>{
        console.log(err)
    })

//Actualizar cliente con nombre José y ponerle la edad en 32
Cliente.updateOne({nombre: "José"}, {edad: 32})
    .then(()=>{
        console.log("Cliente modificado correctamente")
    })
    .catch((err)=>{
        console.log(err)
    })

//Eliminar cliente con el nombre José
Cliente.deleteOne({nombre: "José"})
.then(()=>{
    console.log("Cliente eliminado correctamente")
})
.catch((err)=>{
    console.log(err)
})


