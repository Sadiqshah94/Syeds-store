import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: null | any; 
  isAuthenticated: boolean;
  isLoading: boolean;
  error: null | string; 
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false, 
  isLoading: true,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false; 
      state.error = null; 
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false; 
    },
  },
});

export const { setUser, logout, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
