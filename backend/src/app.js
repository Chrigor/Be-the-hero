const express = require("express");
const app = express();
const cors = require("cors");
const {errors} = require("celebrate")
const routes = require("./routes");

app.use(cors()); // liberado para todas
app.use(express.json()); // aceite json e o transforme em object 
app.use(routes);
app.use(errors());


module.exports = app;