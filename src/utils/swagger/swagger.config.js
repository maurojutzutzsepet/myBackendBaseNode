const swaggerJSDOC = require("swagger-jsdoc");
const json = require("./swagger.util");
const conf = require("../../../conf");

const options = {
  openapi: "3.0.0",
  swaggerDefinition: {
    openapi: "3.0.3",
    info: {
      title: `Api ${conf.projectName}`,
      version: "1.0.0",
      description: "Documentacion api backend base",
    },
    host: `${conf.host}:${conf.port}`,
    basePath: "",
  },
  apis: [
    "./src/routes/*js",
    "./src/swagger/definitions/*.definitions.yaml",
    "./src/swagger/parameters/*.parameters.yaml",
  ],
};

const swaggerSpec = swaggerJSDOC(options);

function init() {
  json.savejsonSwagger(JSON.stringify(swaggerSpec));
}

module.exports.init = init;
