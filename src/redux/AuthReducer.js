import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../api/axiosClient";
import swal from "sweetalert";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    const res = await axiosClient.post("/login", { email, password });
    return res.data;
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    token: undefined,
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.message = undefined;
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.accessToken;
      localStorage.setItem("token", action.payload.accessToken);
      localStorage.setItem("id", action.payload.user.id);

      swal("Success", "You can already use our service", "success");
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loading = false;
      swal("Failed", "You need to check your account information", "error");
    });
  },
});

export default AuthSlice.reducer;
