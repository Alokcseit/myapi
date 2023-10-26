const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("hello i am home");
});

app.get("/twitter", (req, res) => {
  res.send("  hi twitter");
});
app.get("/login", (req, res) => {
  res.send("<h1>i am login page</h1>");
});

app.listen(process.env.PORT, () => {
  console.log("  server is running on  port ", process.env.PORT);
});
