import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  username: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  username: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.username = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
