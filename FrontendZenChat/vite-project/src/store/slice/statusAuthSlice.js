import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    is_auth: false,
    user:null
  };
export const StatusApp = createSlice({
  name: "StatusSystemUser",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.is_auth = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    
}})

export const {setUser, setAuth,} = StatusApp.actions;
export default StatusApp.reducer;