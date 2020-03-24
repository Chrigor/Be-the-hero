const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.status(200).json({
        message: 'Its works!'
    })
});

app.listen(port, () => {
    console.log(`O servidor está escutando na porta ${port}`);
});