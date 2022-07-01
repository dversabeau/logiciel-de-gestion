import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "./usersService";

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user || null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Register an user
export const registerUser = createAsyncThunk('user/create',
  async (user, thunkAPI) => {
    try {
      return await UserService.registerUser(user)
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

// Login an user
export const loginUser = createAsyncThunk('user/login', 

async (user, thunkAPI) => {
  try {
    return await UserService.loginUser(user)
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

export const userSlice = createSlice({
  name:"user",
  initialState,
  reducers : {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ""
    },
  },
  extraReducers : (builder) =>{
    builder.addCase(registerUser.pending, (state)=> {
      state.isLoading = true
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = action.payload
    })
    .addCase(registerUser.rejected, (state, action) =>  {
      console.log("error", action.payload);
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    })

    .addCase(loginUser.pending, (state)=> {
      state.isLoading = true
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.user = action.payload
    })
    .addCase(loginUser.rejected, (state, action) =>  {
      console.log("error", action.payload);
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.user = null
    })
  }
})

export const {reset} = userSlice.actions
export default userSlice.reducer