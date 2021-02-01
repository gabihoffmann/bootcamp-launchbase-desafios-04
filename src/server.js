const path = require("path");
const express = require("express");
const nunjucks = require("nunjucks");

const routes = require("./routes");

const app = express();

app.use(express.static(path.resolve(__dirname, "../public")));
app.use(routes);

app.set("view engine", "njk");

nunjucks.configure(path.resolve(__dirname, "views"), {
  express: app,
  autoescape: false,
  noCache: true,
});

app.listen(5555, () => console.log("Server is running in port 5555"));
