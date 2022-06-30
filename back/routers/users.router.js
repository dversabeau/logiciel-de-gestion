const app = require('express')
const { getUserController, createUserController } = require('../controllers/users.controller')
const Router = app.Router()

Router.route('/').get(getUserController).post(createUserController)


module.exports = Router