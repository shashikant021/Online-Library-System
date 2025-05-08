import { createSlice } from "@reduxjs/toolkit";

const loadBooks = () => {
  const saved = localStorage.getItem("books");
  return saved ? JSON.parse(saved) : [];
};

const booksSlice = createSlice({
  name: "books",
  initialState: {
    list: loadBooks(),
  },
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.list.push(newBook);
      localStorage.setItem("books", JSON.stringify(state.list));
    },
  },
  // localStorage.removeItem("books"); // to clear the data from browser
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
