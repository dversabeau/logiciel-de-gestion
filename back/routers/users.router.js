const app = require('express')
const { getUserController, createUserController, getAllUsersController, loginUserController, deleteUserController } = require('../controllers/users.controller')
const { isLogged } = require('../middlewares/auth')
const Router = app.Router()

Router.route('/register').post(createUserController)
Router.route('/login').post(loginUserController)
Router.route('/all').get(isLogged, getAllUsersController)
Router.route('/').get(isLogged, getUserController)
Router.route('/:id').delete(isLogged, deleteUserController)


module.exports = Router