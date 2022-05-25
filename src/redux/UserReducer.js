import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../api/axiosClient";

export const getUser = createAsyncThunk("user/getUser", async (token) => {
  const res = await axiosClient.get(`/600/users/${localStorage.getItem("id")}`);
  return res.data;
});

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: undefined,
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(getUser.rejected, (state) => {
      localStorage.removeItem("token");
    });
  },
});

export default UserSlice.reducer;
