const app = require('express')
const Router = app.Router()

Router.route('/', (req,res) => {
  res.status(200).json({message: "Hello"})
})


module.exports = Router