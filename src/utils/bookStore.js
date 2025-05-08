import { configureStore } from "@reduxjs/toolkit";
import booksReducer from './booksSlice.js'

export const bookStore = configureStore({
  reducer: {
    books: booksReducer,
  },
});
