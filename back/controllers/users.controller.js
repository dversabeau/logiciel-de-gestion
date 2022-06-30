const User = require('../models/users.model'); 

const asynchandler = require('express-async-handler')


//controller get an user
const getUser = asynchandler(async(req, res) => {
  const data = await User.getUser()
  return res.status(200).json(data)
})


module.exports = {
  getUser,
}