const express = require("express");

const app = express();

app.use(express.static("src/public"));

app.listen(3333, console.log("server is running on port 3333"));
