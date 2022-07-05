import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import OperationService from "./operationsService";

const initialState = {
  operations : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ""
}

// Get All Operations
export const GetAllOperationsSlice = createAsyncThunk('operation/getAll', 

async(thunkAPI) => {
  try {
    return await OperationService.getAllOperations(thunkAPI)
  } catch (error) {
    const message = (error.response &&
      error.response.data &&
      error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
}
)



// Slice
export const operationSlice = createSlice({
  name:"operation",
  initialState,
  reducers: {
    reset : (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ""
    },
  },

  extraReducers : (builder) => {

    // get All Operations
    builder.addCase(GetAllOperationsSlice.pending, (state) => {
      state.isLoading = true
    })
    .addCase(GetAllOperationsSlice.isSuccess, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.operations = action.payload
    })
    .addCase(GetAllOperationsSlice.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.operations = null
    })
  }
})

export const {reset} = operationSlice.actions
export default operationSlice.reducer