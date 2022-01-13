
const obtenerChiste = require("./library");

// Codigo funcion callback
const funcionCallback = (data) =>{
    console.log(data);
}
// Fin codigo

// Usar la funcion obtenerChiste(funcionCallback) en donde funcionCallback es una función que recibe el objeto chiste extraido

obtenerChiste(funcionCallback);
