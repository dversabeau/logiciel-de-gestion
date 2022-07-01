const jwt = require('jsonwebtoken')
const asynchandler = require('express-async-handler')
const User = require('../models/users.model')
const AppError = require('../helpers/appError')

exports.isLogged = asynchandler(async(req, res, next) => {
let token = ""
if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
  try {
    // sparece bearer with token
    token = req.headers.authorization.split(' ')[1]

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // get user from db
    req.user = await User.getUser("id_user", decoded['id'])
    next()
  } catch (error) {
    throw new AppError('not authorized', 401)
  }
}
if (!token) {
  throw new AppError('not authorized && no token', 401)
}
})