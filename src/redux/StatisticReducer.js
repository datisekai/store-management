import { create } from "@mui/material/styles/createTransitions";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";
import axiosClient from "../api/axiosClient";

export const getCategory = createAsyncThunk(
  "statistic/getCategory",
  async (page) => {
    const res = await axiosClient.get(
      `/categories?_page=${page || 1}&_limit=4`
    );
    const resProduct = await axiosClient.get("/products");
    return {
      category: res.data,
      product: resProduct.data,
      total: res.headers["x-total-count"],
    };
  }
);

export const getProduct = createAsyncThunk("statistic/getProduct", async () => {
  const res = await axiosClient.get("/products");
  return {
    product: res.data,
    total: res.headers["x-total-count"],
  };
});

export const getStaff = createAsyncThunk("statistic/getStaff", async () => {
  const res = await axiosClient.get("/users");
  return {
    staff: res.data,
    total: res.headers["x-total-count"],
  };
});

export const getHome = createAsyncThunk("statistic/getHome", async () => {
  const resCategory = await axiosClient.get("/categories");
  const resProduct = await axiosClient.get("/products");
  const resStaff = await axiosClient.get("/users");
  console.log(resCategory);

  return {
    category: resCategory.data.length,
    product: resProduct.data.length,
    staff: resStaff.data.length,
  };
});

const StatisticSlice = createSlice({
  name: "statistic",
  initialState: {
    category: [],
    product: [],
    staff: [],
    total: 0,
    home: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.total = +action.payload.total;
      state.category = action.payload.category;
      state.product = action.payload.product;
    });

    builder.addCase(getCategory.rejected, (state) => {
      swal("Lấy danh mục thất bại");
    });

    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.total = +action.payload.total;
      state.product = action.payload.product;
    });

    builder.addCase(getProduct.rejected, (state) => {
      swal("Lấy sản phẩm thất bại");
    });
    builder.addCase(getStaff.fulfilled, (state, action) => {
      state.total = +action.payload.total;
      state.staff = action.payload.staff;
    });
    builder.addCase(getStaff.rejected, (state) => {
      swal("Lấy nhân viên thất bại");
    });

    builder.addCase(getHome.fulfilled, (state, action) => {
      console.log(action.payload);
      state.home = action.payload;
    });
  },
});

export default StatisticSlice.reducer;
