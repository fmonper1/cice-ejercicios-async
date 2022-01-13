
const obtenerPersonaFake = require("./library");

// Codigo funcion callback

const callback = (data) =>{
    const persona = data.results[0]

    console.log(`${persona.name.title} ${persona.name.first} ${persona.name.last}`);
}

// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(callback);
