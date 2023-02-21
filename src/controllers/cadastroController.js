const Database = require("../db/config");

module.exports = {
  async create(req, res) {
    const db = await Database();

    const nome = req.body.nome;
    const idade = req.body.idade;
    const porte = req.body.porte;
    const raca = req.body.raca;

    await db.run(`INSERT INTO cadastro (
        nome,
        idade,
        porte,
        raca
    )VALUES(
        "${nome}",
         ${idade},
        "${porte}",
        "${raca}"
    )`);

    res.redirect(`/`);
  },
};
