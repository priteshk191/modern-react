import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import authReducer from "../src/Components/Auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [thunkMiddleware],
});
