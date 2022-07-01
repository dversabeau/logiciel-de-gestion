import axios from "axios";

const API_URL = '/api/user'

// Create a user

const registerUser = async (data) => {
  const response = await axios.post(API_URL+"/register", data)
  console.log(response, "ress");
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const UserService = {
  registerUser
}

export default UserService;