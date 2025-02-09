import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postReq } from "@/api/request";

export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async (credentials: any, { rejectWithValue }) => {
    try {
      const response: any = await postReq("auth/login", credentials);
      console.log(response);
      localStorage.setItem("token", response?.data?.access_token);
      console.log("API Response:", response);
      return response;
    } catch (error: any) {
      console.error("Login Error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

const signInSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload as any;
    });
    builder.addCase(signInUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as any;
    });
  },
});

export const { logout } = signInSlice.actions;
export default signInSlice.reducer;
