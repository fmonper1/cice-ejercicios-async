
const obtenerPokemon = require("./library");

obtenerPokemon("bulbasaur")
    .then(function(response){
        response.abilities.forEach((element, i)=> {
            console.log(element.ability.name)
            console.log(i)
        });
    })
    .catch(function(error){
        console.log(error)
    });

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
