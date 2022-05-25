const express = require("express");
const testRoute = require("../controllers/test");
const router = express.Router();

router.get("/", testRoute.test);

module.exports = router;
