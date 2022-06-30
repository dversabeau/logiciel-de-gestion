const User = require('../models/users.model');
const bcrypt = require('bcryptjs')
const asynchandler = require('express-async-handler');
const { checkChar, ValidateEmail } = require('../helpers/regex');
const AppError = require('../helpers/appError');
const { generateToken } = require('../helpers/generateToken');



//controller get an user
module.exports.getUserController = asynchandler(async (req, res) => {
  const data = await User.getUser()
  return res.status(200).json(data)
})


// Controller create an user 
module.exports.ceateUserController = asynchandler(async (req, res) => {
  const { email, password, confirmPassword } = req.body

  if (!email || !password || !confirmPassword) {
    throw new AppError('Email, Password ou Confirm Password sont obligatoires', 404)
  }

  if (ValidateEmail.test(email) !== true) {
    throw new Error('Email is not valide.', 400)
  }

  if (password !== confirmPassword) {
    throw new AppError('password !== confirm password')
  }

  // hash Password
  const salt = await bcrypt.genSalt(10)
  const hashpass = await bcrypt.hash(password, salt)

  // REQ SQL pour créer un utilisateur
  await User.createUser(email, hashpass)
  const newUser = User.getUser("email", email)
  if (newUser) {
    res.status(200).json({
      id: newUser.id,
      email: newUser.email,
      token: generateToken(newUser.id),
      role: newUser.role
    })
  } else {
    throw new AppError('Invalid Error', 400)
  }


})
