import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    action: true,
    location: null,
    name: '',
    email: '',
    password: ''
  };
export const authSlice = createSlice({
  name: "Zen",
  initialState,
  reducers: {
    setAction: (state, action) => {
      state.action = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setClear: (state) => {
        state.password = '';
        state.email = '';
        state.name = '';
        state.location = null;

      },
}})

export const { setAction, setLocation, setName, setEmail, setPassword ,setClear,} = authSlice.actions;
export default authSlice.reducer;