import axios from "axios";

const API_URL = '/api/user'

// Create an user
const registerUser = async (data) => {
  const response = await axios.post(API_URL+"/register", data)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// login an user
const loginUser = async(data) => {
  const response = await axios.post(API_URL+"/login", data)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const UserService = {
  registerUser,
  loginUser
}

export default UserService;