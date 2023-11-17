module.exports = (app) => {
  app.post("/signin-user", (req, res) => {
    const { nome, username, email, senha } = req.body;

    if (!nome) {
      res.status(400).send({ erro: "O nome é obrigatório" });
      return;
    }

    if (nome.length < 3 || nome.length > 100) {
      res
        .status(400)
        .send({ erro: "O nome deve ter entre 3 e 100 caracteres" });
      return;
    }

    if (!username) {
      res.status(400).send({ erro: "O nome de usuário é obrigatório" });
      return;
    }

    if (username.length < 3 || username.length > 100) {
      res
        .status(400)
        .send({ erro: "O username deve ter entre 3 e 100 caracteres" });
      return;
    }

    if (!email) {
      res.status(400).send({ erro: "O email é obrigatório" });
      return;
    }

    if (!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      res.status(400).send({ erro: "O email é inválido" });
      return;
    }

    if (!senha) {
      res.status(400).send({ erro: "A senha é obrigatória" });
      return;
    }

    if (senha.length < 6 || senha.length > 20) {
      res
        .status(400)
        .send({ erro: "A senha deve ter entre 6 e 20 caracteres" });
      return;
    }
  });
};
