const app = require('express')
const { getUser } = require('../controllers/users.controller')
const Router = app.Router()

Router.route('/').get(getUser)


module.exports = Router