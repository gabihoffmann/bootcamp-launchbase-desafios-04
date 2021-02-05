const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.redirect("/students");
});

routes.get("/students", (req, res) => {
  res.render("students");
});

routes.get("/teachers", (req, res) => {
  res.render("teachers/index");
});

module.exports = routes;
