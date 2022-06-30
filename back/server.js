require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors');
const AppError = require('./helpers/appError');
const errorHandler = require('./helpers/errorHandler');
const PORT = process.env.API_PORT


// body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// config router user
const userRoute = require('./routers/users.router')
app.use('/api/user', userRoute)
app.use('/api/category', require('./routers/users.router'))


// Error handler
app.all("*", (req, res) => {
  throw new AppError(`Requested URL ${req.path} not found!`, 404)
})

app.use(AppError)

// listen
app.listen(PORT, () => {
  console.log("le serveur tourne sur le port: " + PORT);
})