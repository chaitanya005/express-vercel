const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8080;

app.get("/helo", (req, res) => {
  res.send({ message: "Hey! There" });
});

app.get("/", (req, res) => {
  res.send({ message: "hello world! checkout /helo" });
});

app.listen(PORT, (error) => {
  if (error) {
    return console.log("Error during app startup", error);
  }
  console.log("listening on " + PORT + "...");
});
