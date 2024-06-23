import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../../entites/session/authSlice";
import filterReducer from "./filterSlice";
import booksReducer from "./booksSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    filter: filterReducer,
    books: booksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
