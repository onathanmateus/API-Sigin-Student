const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/signin-user", require("./routes/signin-user"));

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
