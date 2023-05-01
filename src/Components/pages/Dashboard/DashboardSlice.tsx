import { createSlice } from "@reduxjs/toolkit";

interface DashboardState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  selectedPage: string;
}

const initialState: DashboardState = {
  status: "idle",
  error: null,
  selectedPage: "",
};

const dashboardSlice = createSlice({
  name: "Dashboard",
  initialState,
  reducers: {
    setSelectedPage(state, action) {
      state.selectedPage = action.payload;
    },
  },
});

export const { setSelectedPage } = dashboardSlice.actions;
export default dashboardSlice.reducer;
