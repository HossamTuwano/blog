const User = require("../models/user");
const bcrypt = require("bcrypt");
const config = require("config");
const user = require("../models/user");
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  //   validating

  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password is Requried" });
  }

  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ message: "User Already Exists" });

    const newUser = new User({
      email: email,
      password: password,
    });

    //hashing password using bcrypt

    bcrypt.genSalt(10, (error, salt) => {
      bcrypt.hash(newUser.password, salt, (error, hash) => {
        if (error) throw error;
        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            {
              id: user.id,
            },
            config.get("secret"),
            { expiresIn: 3600 },
            (error, token) => {
              if (error) throw error;
              res.json({
                token,
                user: {
                  id: user.id,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
};
