import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/users/usersSlice";
import operationReducer from "./features/operations/operationsSlice";

export const store = configureStore({
  reducer: {
    user : userReducer,
    operation: operationReducer,
    category: "",
  }
})