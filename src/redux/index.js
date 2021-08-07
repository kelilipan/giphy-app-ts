import { configureStore } from "@reduxjs/toolkit";
import gifsReducer from "./store/gifs";
export const store = configureStore({
  reducer: {
    gifs: gifsReducer,
  },
});
