const express = require('express');
const app = express();
const routes = express.Router();
const PORT = 3500;

app.get(('/'), (req, res) =>{
    res.send("Hello World!");
});

app.listen(PORT, () =>{console.log(`your server is running in port number ${PORT} thank you!`)});