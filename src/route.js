const express = require("express");
const cadastroController = require("./controllers/cadastroController");

const route = express.Router();

route.get("/", (req, res) => res.render("index"));

route.post("/cadastro/create", cadastroController.create);

module.exports = route;
