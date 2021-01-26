const path = require("path");
const express = require("express");

const app = express();

app.listen(5555, () => {
  console.log("Server is running in port 5555");
});
