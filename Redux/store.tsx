// store.ts

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";
import DashboardSlice from "@/Components/pages/Dashboard/DashboardSlice";

const appReducer = combineReducers({
  dashboard: DashboardSlice,
});

export type AppState = ReturnType<typeof appReducer>;
export type RootState = AppState;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: {}, // Add any extra arguments here
      },
    }).concat(thunkMiddleware),
  devTools: true, // Set this to true in development
});

export default store;
