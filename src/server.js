const express = require("express"); //importa o express
const route = require("./route");
const path = require("path");

const server = express(); // executa o express

server.set("view engine", "ejs");

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true })); //ira ativar a funcionalidade req body

server.set("views", path.join(__dirname, "views"));

server.use(route);

server.listen(3000, () => console.log("RODANDO"));
