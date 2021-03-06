const express = require("express");
const { body } = require("express-validator");
const authController = require("../controllers/auth");
const router = express.Router();

router.post("/signup", authController.signup);

router.post("/login", authController.login);

module.exports = router;
