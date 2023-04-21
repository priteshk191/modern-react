import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  error: null,
  selectedPage: "",
};

const dashboardSlice = createSlice({
  name: "Dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});
export const {} = dashboardSlice.actions;
export default dashboardSlice.reducer;
