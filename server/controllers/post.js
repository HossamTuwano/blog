const Post = require("../models/post");

exports.addPost = (req, res, next) => {
  const { title, body, author } = req.body;

  const post = new Post({
    title: title,
    body: body,
    author: author,
  });

  post
    .save()
    .then(() => res.status(201).json({ msg: "post added", post }))
    .catch((err) => console.log(err));
};

exports.getSinglePost = (req, res) => {
  id = req.params._id;
  Post.findById(id, (error, post) => {
    if (error) {
      res.status(400).json({ success: false, message: "post not found" });
    }
    if (post) {
      res.status(201).json({ success: true, message: "post found", post: post });
    }
  });
};

exports.getPost = (req, res, next) => {
  Post.find().then((post) => res.status(200).json(post));
};
