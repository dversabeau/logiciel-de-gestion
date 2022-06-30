const query = require("../config/ConnectionDB");
const AppError = require("../helpers/appError");
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
  
  }