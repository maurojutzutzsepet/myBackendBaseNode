require("dotenv").config();
module.exports = {
  projectName: process.env.PROJECTNAME,
  host: process.env.HOST,
  port: parseInt(process.env.PORT),
};
