import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { postReq } from "@/api/request";




interface User {
  email: string;
  password: string;
}

interface SignInResponse {
  access_token: string;
  user: User;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

// AsyncThunk for Sign In
export const signInUser = createAsyncThunk<User, Record<any, unknown>, { rejectValue: string }>(
  "auth/signInUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await postReq<SignInResponse>("auth/login", credentials);
      localStorage.setItem("token", response.data.access_token);
      return response.data.user;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

// Auth Slice
const signInSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  } as AuthState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signInUser.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logout } = signInSlice.actions;
export default signInSlice.reducer;
