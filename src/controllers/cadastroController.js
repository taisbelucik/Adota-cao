const Database = require("../db/config");

module.exports = {
  async create(req, res) {
    const db = await Database();

    const nome = req.body.nome;
    const idade = req.body.idade;
    const porte = req.body.porte;
    const raca = req.body.raca;

    console.log(req.body);

    await db
      .run(
        `INSERT INTO cadastro(
        nome,
        idade,
        porte,
        raca
    )VALUES(
        "${nome}",
         ${idade},
        "${porte}",
        "${raca}"
    )`
      )
      .catch((res) => {
        console.log(res);
      });

    res.redirect(`/`);
  },

  async list(req, res) {
    const db = await Database();
    const cadastros = await db.all(`SELECT * FROM cadastro`);

    res.render("index", { registros: cadastros });
  },
};
