const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
const app = async () => {
 try{
  const pokemon = await obtenerPokemon("bulbasaur");
  console.log(pokemon.name);
  console.log(pokemon.abilities);
 }
 catch(error){
  console.log("error!!!!");
 }
};
app();



