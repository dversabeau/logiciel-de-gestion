const asynchandler = require('express-async-handler')

export const getUser = asynchandler(async(req, res) => {
  res.status(200).json({message: 'hello'})
})

