const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/map", (req, res) => {
  res.send("Map Page");
});
app.get("/contect", (req, res) => {
  res.send("Contect Page");
});
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
