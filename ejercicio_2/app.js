
const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido

obtenerChiste()
    .then(function(response){
        console.log(response.value)
    })
    .catch(function(error){
        console.log(error)
    });

/*
obtenerChiste()
    .then(miCallback)
    .catch(function(error){
        console.log(error)
    });

function miCallback(response){
    console.log(response.value)
}*/
