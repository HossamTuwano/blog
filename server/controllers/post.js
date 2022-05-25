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

exports.getPost = (req, res, next) => {
  Post.find().then((post) => res.status(200).json(post));
};
