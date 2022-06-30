const query = require("../config/ConnectionDB");
const AppError = require("../helpers/appError");

module.exports = class User {

  // config contructor
  constructor({ id_user, name, email, role, password, username}) 
  {
    this.id = id_user;
    this.username = username;
    this.email = email;
    this.role = role;
    // this.password = password;

  }

    // Get an user
    static async getUser(key, value) {
      const result = await query(`SELECT * from USERS where ${key} = "${value}"`)
      const user = result[0]
      if (user === undefined) {
        throw new AppError('any User was not found', 404)
      }
      return new User(user)
    }

    // Create an user
    static async createUser(email, password, username) {
      const checkUser = await query(`select USERS.email from USERS where email = "${email}"`)
      
      if(checkUser[0]) {
       throw new AppError('cet email dèja existe', 400)
      }

      await query(`INSERT into USERS SET email = '${email}', password = '${password}', username= '${username}'`)

      const getUser = await this.getUser('email', email)

      return new User(getUser)
    }
  
  }