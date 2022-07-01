const jwt = require('jsonwebtoken')
const asynchandler = require('express-async-handler')
const User = require('../models/users.model')
const AppError = require('../helpers/appError')

exports.isLogged = asynchandler(async(req, res, next) => {
let token = ""

if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
  try {
    token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.getUser("id",decoded.id)
    next()
  } catch (error) {
    throw new AppError('not authorized', 401)
  }
}
if (!token) {
  throw new AppError('not authorized && no token', 401)
}
})