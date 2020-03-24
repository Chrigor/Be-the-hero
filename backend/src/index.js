const express = require("express");
const app = express();
const cors = require("cors");

const routes = require("./routes");

app.use(cors()); // liberado para todas
app.use(express.json()); // aceite json e o transforme em object 
app.use(routes);


const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`O servidor está escutando na porta ${port}`);
});