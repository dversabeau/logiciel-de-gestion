const query = require("../config/ConnectionDB");
const AppError = require("../helpers/appError");
const bcrypt = require('bcryptjs');
const { checkChar } = require("../helpers/regex");
module.exports = class User {

  // config contructor
  constructor({ id_user, name, email, role, password}) 
  {
    this.id = id_user;
    this.name = name;
    this.email = email;
    this.role = role;
    this.password = password;
  }

    // Get an user
    static async getUser() {
      const result = await query(`SELECT * from USERS`)
      const user = result[0]
      if (user === undefined) {
        throw new AppError('any User was not found', 404)
      }
      return new User(user)
    }

    // Create an user
    static async createUser(email, password) {

      const checkUser = await query(`select email from USERS where email = ${email}`)

      if(checkUser) {
        throw new AppError('cet email dèja existe', 400)
      }
      const result = await query(`inset into USERS SET email = "${email}", password = "${password}"`)

      const getUser = await this.getActor('id', result.insertId)

      return new User(getUser)
    }
  
  }