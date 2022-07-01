const User = require('../models/users.model');
const bcrypt = require('bcryptjs')
var validator = require('validator');
const asynchandler = require('express-async-handler');
const { checkChar, ValidateEmail } = require('../helpers/regex');
const AppError = require('../helpers/appError');
const { generateToken } = require('../helpers/generateToken');


// @desc   Get user
// @route  GET /api/users/
// @access private
module.exports.getUserController = asynchandler(async (req, res) => {
  const data = await User.getUser("email", "mamad@m.com")
  return res.status(200).json(data)
})

// @desc   Get user
// @route  POST /api/users/register
// @access public
module.exports.createUserController = asynchandler(async (req, res) => {
  const { email, password, confirmPassword, username } = req.body

  if (!validator.matches(username, "^[a-zA-Z0-9_\.\-]*$")){
    throw new AppError('username is not valide', 400)
  }

  if (!validator.isEmail(email)){
    throw new AppError('email is not valide', 400)
  }

  if (!email || !password || !confirmPassword || !username) {
    throw new AppError('Email, Password ou Confirm Password ou username sont obligatoires', 404)
  }

  // if (ValidateEmail.test(email) !== true) {
  //   throw new Error('Email is not valide.', 400)
  // }

  if (password !== confirmPassword) {
    throw new AppError('password !== confirm password')
  }

  // hash Password
  const salt = await bcrypt.genSalt(7)
  const hashpass = await bcrypt.hash(password, salt)

  // REQ SQL pour créer un utilisateur
  await User.createUser(email, hashpass, username)
  const newUser = await User.getUser("email", email)
  if (newUser) {
    res.status(200).json({
      id: newUser.id,
      email: newUser.email,
      username: newUser.username,
      token: generateToken(newUser.id),
      role: newUser.role
    })
  } else {
    throw new AppError('Invalid Error', 400)
  }
})

// @desc   Get all users
// @route  GET /api/users/all
// @access private
module.exports.getAllUsersController = asynchandler(async(req, res) => {
  const data = await User.getAllUsers()
  return res.status(200).json(data)
})

// @desc   login user
// @route  POST /api/users/login
// @access public
module.exports.loginUserController = asynchandler(async(req, res) => {
  const {usermail, password} = req.body
  
  if(!usermail || !password) {
    throw new AppError('username ou email ou password sont obligatoires', 404)
  }

  const loginUser = await User.loginUser(usermail, password)
  if (loginUser) {
    res.status(200).json({
      id: loginUser.id,
      email: loginUser.email,
      username: loginUser.username,
      token: generateToken(loginUser.id),
      role: loginUser.role
    })
  } else {
    throw new AppError('Invalid Error', 400)
  }
})

// @desc   edit user
// @route  PUT /api/users/login
// @access public
module.exports.editUser = asynchandler(async(req, res) => {

})

module.exports.deleteUserController = asynchandler(async(req, res) => {
  const {id} = req.params
  await User.deleteUser(id)
  res.status(200).json({id : id})
})