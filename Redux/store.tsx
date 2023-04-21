import DashboardSlice from "@/Components/pages/Dashboard/DashboardSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

export const store = configureStore({
  reducer: DashboardSlice,
  middleware: [thunkMiddleware],
});
// const appReducer = combineReducers({
//   dashboard: DashboardSlice,
// });

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["products", "posts"],
// };
// clear persist for remove all data
// const rootReducer = (state, action) => {
//   // if (action.type === "User/logout") {
//   //   storage.removeItem("persist:root");
//   //   return appReducer(undefined, action);
//   // }
//   return appReducer(state, action);
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
//   devTools: false,
// });

// export const persistor = persistStore(store);
export default store;
