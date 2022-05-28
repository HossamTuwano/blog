const express = require("express");
const postController = require("../controllers/post");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.post("/add-post", isAuth, postController.addPost);
router.get("/posts", postController.getPost);
router.get("/posts/:_id", postController.getSinglePost)

module.exports = router;
