const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido
const app = async () => {
  obtenerChiste();
  try {
    const chiste = await obtenerChiste();

  console.log("chiste: ", chiste.value);
    console.log("chiste: ", chiste.value);
  } catch (error) {
    console.error(error);
  }
};
app();
