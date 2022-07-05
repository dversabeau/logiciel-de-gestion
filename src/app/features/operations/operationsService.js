import axios from "axios";

const API_URL = "api/operation"

const getAllOperations = async (token) => {
  console.log(token);
  const response = await axios.get(API_URL)

  return response.data
}



const OperationService = {
  getAllOperations
}

export default OperationService;