const http = require("http");
const express = require("express");
const cors = require("cors");
const importData = require("./products.json");
const app = express();

app.use(cors());

app.set("json spaces", 2);

app.get("/products", (req, res) => {
  res.send(importData);
});

app.get("/", function (req, res) {
  // Siempre la primer variable es la petición, la segunda la respuesta

  res.sendFile(__dirname + "/index.html");
});

const server = http.createServer(app);
const port = process.env.PORT || 1984;
server.listen(port);
console.debug("Funcionando al puerto " + port);
