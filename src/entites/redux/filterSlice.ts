import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  priceRange: {
    from: string;
    to: string;
  };
  selectedAuthor: string;
}

const initialState: FilterState = {
  priceRange: {
    from: "",
    to: "",
  },
  selectedAuthor: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPriceRange(state, action: PayloadAction<{ from: string; to: string }>) {
      state.priceRange = action.payload;
    },
    setSelectedAuthor(state, action: PayloadAction<string>) {
      state.selectedAuthor = action.payload;
    },
  },
});

export const { setPriceRange, setSelectedAuthor } = filterSlice.actions;

export default filterSlice.reducer;
