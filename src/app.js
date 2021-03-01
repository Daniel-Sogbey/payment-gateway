const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// configurations for file paths
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// view engines with hbs config
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// static directory config
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("index", {
    name: "Daniel Sogbey",
  });
});

app.listen(3000, () => {
  console.log("server running successfully on port 3000");
});
