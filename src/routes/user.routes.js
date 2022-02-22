const express = require("express");
const router = express.Router();
const users = require("../controllers/user/user.controller");

router.get("/user", users.getAllUsers);

module.exports = router;
