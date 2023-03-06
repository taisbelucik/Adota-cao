const express = require("express");
const cadastroController = require("./controllers/cadastroController");

const route = express.Router();

route.get("/", cadastroController.list);

route.post("/cadastro/create", cadastroController.create);

module.exports = route;
