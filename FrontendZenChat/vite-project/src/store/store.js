import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/appSlice";
import StatusApp from "./slice/statusAuthSlice";

export const store = configureStore({
  reducer: {
    authSlice,
    StatusApp,
  },
  devTools: true,
});
