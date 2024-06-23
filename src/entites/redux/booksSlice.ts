import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../../types/book.types";
interface BooksState {
  books: Book[];
}

const initialState: BooksState = {
  books: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks(state, action: PayloadAction<Book[]>) {
      state.books = action.payload;
    },
  },
});

export const { setBooks } = booksSlice.actions;

export default booksSlice.reducer;
