//"npm init -y" inicializa nuestro archivo package.js
//"npm install chance" instala el modulo chance, tambien se puede escribir "npm i chance"

const Chance = require("chance"); //Importamos el modulo previamente instalado con npm

const chance = new Chance(); //Instanciamos de la clase Chance

const randomName = chance.name() //Obtenemos nombre, edad y email aleatorio
const randomAge = chance.age()
const randomEmail = chance.email()

console.log("Nombre aleatorio:", randomName)//Los mostramos
console.log("Edad aleatoria:", randomAge)
console.log("Email aleatoria:", randomEmail)

const {sumar, multiplicar} = require("./calculadora.js")// importamos las funciones sumar y multiplicar de nuestro archivo calculadora

console.log(sumar(1,5))
console.log(multiplicar(10,4))

//"node app.js" ejecuta nuestro codigo con nodejs
