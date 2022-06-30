const express = require("express");
const app = express();
const cors = require('cors')
require('dotenv').config()
const API_PORT = process.env.API_PORT



app.listen(API_PORT, () => {
  console.log("le serveur tourne sur le port: " + API_PORT);
})