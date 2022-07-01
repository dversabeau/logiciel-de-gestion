require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors');
const AppError = require('./helpers/appError');
const errorHandler = require('./helpers/errorHandler');
const PORT = process.env.API_PORT


// body parser
app.use(express.json())
// app.use(express.urlencoded({extended:false}))

// app.use(cors({
//   "origin": "*",
//   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//   "preflightContinue": true,
//   "optionsSuccessStatus": 204,
// }))

// config router user
app.use('/api/user', require('./routers/users.router'))
app.use('/api/category', require('./routers/categories.router'))
app.use('/api/operation', require('./routers/operations.router'))

// Error handler
app.all("*", (req, res) => {
  throw new AppError(`Requested URL ${req.path} not found!`, 404)
})

app.use(errorHandler)

// listen
app.listen(PORT, () => {
  console.log("le serveur tourne sur le port: " + PORT);
})