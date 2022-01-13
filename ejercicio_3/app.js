const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido
const app = async () => {
  const chiste = await obtenerChiste();

  console.log("chiste: ", chiste.value);
};
app();
