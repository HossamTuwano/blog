const express = require("express");
const postController = require("../controllers/post");

const router = express.Router();

router.post("/add-post", postController.addPost);
router.get("/posts", postController.getPost);

module.exports = router;
