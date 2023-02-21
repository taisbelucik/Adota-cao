const Database = require("./config");

const initDb = {
  async init() {
    const db = await Database();

    await db.exec(`CREATE TABLE cadastro(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome  TEXT ,
        idade INTEGER,
        porte TEXT,
        raca TEXT
    )`);

    await db.close();
  },
};
initDb.init();
