const express = require("express");
const app = express();
var swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./src/swagger/swagger.json");

const jsonConfig = require("./src/utils/swagger/swagger.config");
const port = 3000 || process.env.port;

jsonConfig.init();

app.use(express.json());

app.use(require("./src/routes/user.routes"));
app.use(require("./src/routes/score.routes"));

app.get("/", (req, res) => {
  res.send("Hellow word");
});
//se declara despues la config de swagger para identificar las rutas
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log("App listent in port ", port);
});
