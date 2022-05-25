const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const postRouter = require("./routes/post");
const authRouter = require("./routes/auth");

dotenv.config({ path: "./.env" });
const port = process.env.PORT;

const dbURI = process.env.DBURI;

const app = express();

app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use(postRouter);
mongoose
  .connect(
    dbURI
  )
  .then((res) => {
    app.listen(port, () => {
      console.log(`connected to server 127.0.0.0:${port}`);
    });
  })
  .catch(
    (err) => {
      console.log(err);
    },
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  );

mongoose.connection.on("open", () => {
  console.log("connected to database");
});
