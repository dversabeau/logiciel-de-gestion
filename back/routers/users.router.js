const app = require('express')
const Router = app.Router()

Router.route('/').get(getUser).post(create)


module.exports = Router