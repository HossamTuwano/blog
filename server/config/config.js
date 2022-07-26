const mongoose = require("mongoose");

require("dotenv/config");

const db = () => {
  mongoose.connect(process.env.uri);

  mongoose.connection.on("open", () => {
    console.log("connected to database");
  });

  mongoose.connection.on("error", (error) => {
    console.log(error);
  });
};

module.exports = db;
