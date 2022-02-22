const fs = require("fs");

function savejsonSwagger(json_file) {
  //create if no existe the forlder swagger
  if (!fs.existsSync("./src/swagger")) fs.mkdirSync("./src/swagger");

  fs.writeFileSync(
    "./src/swagger/swagger.json",
    json_file,
    "utf-8",
    function (err) {
      if (err)
        return reject(
          "An error ocurred while wirting the json swagger Object to file"
        );
      console.log("swagger file created!!");
      resolve(true);
    }
  );
}

module.exports.savejsonSwagger = savejsonSwagger;
