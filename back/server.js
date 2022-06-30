const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
const PORT = process.env.API_PORT

app.listen(API_PORT, () => {
  console.log("le serveur tourne sur le port: " + API_PORT);
})