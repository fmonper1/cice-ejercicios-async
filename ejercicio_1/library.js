const https = require("https");

var url = "https://api.chucknorris.io/jokes/random";

function obtenerChiste(callback) {
  https
    .get(url, (resp) => {
      let data = "";

      resp.on("data", (chunk) => {
        data += chunk;
      });

      resp.on("end", () => {
        callback(JSON.parse(data));
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
}

module.exports = obtenerChiste;
