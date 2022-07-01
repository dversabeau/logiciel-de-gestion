const query = require("../config/ConnectionDB");
const AppError = require("../helpers/appError");
const bcrypt = require('bcryptjs')

module.exports = class User {

  // config contructor
  constructor({ id_user, name, email, role, password, username }) {
    this.id = id_user;
    this.username = username;
    this.email = email;
    this.role = role;
    // this.password = password;

  }

  // Get an user
  static async getUser(key, value) {
    let result;
    if (key === "email" || key === "username") {
      result = await query(`SELECT USERS.id_user, USERS.role, USERS.username, USERS.email from USERS where ${key} = "${value}"`)
    } else {
      result = await query(`SELECT USERS.id_user, USERS.role, USERS.username, USERS.email from USERS where ${key} = ${value}`)
    }
    const user = result[0]
    if (user === undefined) {
      throw new AppError('User was not found', 404)
    }
    return new User(user)
  }

  // get All User
  static async getAllUsers() {
    const result = await query('SELECT USERS.id_user, USERS.role, USERS.username, USERS.email from USERS')
    if (result[0] === undefined) {
      throw new AppError('Any User was not found', 404)
    }

    return result.map(user => new User(user))
  }

  // Create an user
  static async createUser(email, password, username) {
    const checkUser = await query(`select USERS.email from USERS where email = "${email}"`)

    if (checkUser[0]) {
      throw new AppError('cet email dèja existe', 400)
    }

    await query(`INSERT into USERS SET email = '${email}', password = '${password}', username= '${username}'`)

    const getUser = await this.getUser('email', email)

    return new User(getUser)
  }

  // Login model
  static async loginUser(usermail, password) {
    const checkUser = await query(`select USERS.email, USERS.password from USERS where USERS.email = "${usermail}" or USERS.username = "${usermail}"`)

    // check username ou email
    if (!checkUser[0]) {
      throw new AppError('cet email ou username n"existe pas', 404)
    }

    // Check Password
    if (!(await bcrypt.compare(password, checkUser[0].password))) {
      throw new AppError('password is not correct', 400)
    }

    // Get user by email
    const getUser = await this.getUser('email', checkUser[0].email)
    return new User(getUser)

  }

  // Delete model
  static async deleteUser(id) {
    const checkUser = await query(`select email from USERS where id_user = ${id}`)

    // check username ou email
    if (!checkUser[0]) {
      throw new AppError('cet user  n"existe pas', 404)
    }

    return await query(`DELETE FROM USERS WHERE id_user = ${id}`)


  }

}