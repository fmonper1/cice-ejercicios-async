const rp = require("request-promise");

var options = {
  uri: "https://api.chucknorris.io/jokes/random",
  json: true,
};

function obtenerChiste() {
  return rp(options);
}

module.exports = obtenerChiste;
