require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors')
const PORT = process.env.API_PORT


// body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// config router user
app.use('/api/user', require('./routers/users.router'))

// listen
app.listen(PORT, () => {
  console.log("le serveur tourne sur le port: " + PORT);
})