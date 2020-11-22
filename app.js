const http = require("http");
const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

app.set("json spaces", 2);

app.get("/", function (req, res) {
  // Siempre la primer variable es la petición, la segunda la respuesta

  res.sendFile(__dirname + "/index.html");
});

// routes
app.use("/api/products", require("./routes/products"));

const server = http.createServer(app);
const port = process.env.PORT || 1984;
server.listen(port);
console.debug("Funcionando al puerto " + port);
