const express = require("express");
const swaggerUiExpress = require("swagger-ui-express");

const app = express();

app.use(express.json());

app.post("/signin-user", (req, res) => {
  const nome = req.body.nome;
  const username = req.body.username;
  const email = req.body.email;
  const senha = req.body.senha;

  res.status(200).json({
    mensagem: "Usuário criado com sucesso!",
  });
});

app.get("/api-docs", swaggerUiExpress.serve, (req, res) => {
  res.send();
});

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
