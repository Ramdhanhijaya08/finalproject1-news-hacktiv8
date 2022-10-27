import { configureStore } from "@reduxjs/toolkit";
import savedSlice from "../features/savedSlice";
import authSlice from "../features/authSlice";

export const store = configureStore({
  reducer: {
    saved: savedSlice,
    login: authSlice,
  },
});
