import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import swal from "sweetalert";
import axiosClient from "../api/axiosClient";
import axiosImage from "../api/axiosImage";

export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async (page) => {
    const res = await axiosClient.get(`/products?_page=${page || 1}&_limit=4`);
    return {
      products: res.data,
      total: res.headers["x-total-count"],
    };
  }
);

export const getAllCategory = createAsyncThunk(
  "product/getAllCategory",
  async () => {
    const res = await axiosClient.get("/categories?isSell=1");
    return res.data;
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product) => {
    const formData = new FormData();
    formData.append("file", product.file);
    formData.append("upload_preset", "k7g9rfyh");
    const resImage = await axiosImage.post("/", formData);
    const image = resImage.data.url;

    const res = await axiosClient.post("/products", {
      name: product.name,
      image,
      categories: product.categories,
      price: product.price,
      status: "1",
      createdAt: Date.now(),
      writer: "Admin",
    });

    return res.data;
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (product) => {
    let image = product.image;
    if (product.file) {
      const formData = new FormData();
      formData.append("file", product.file);
      formData.append("upload_preset", "k7g9rfyh");
      const resImage = await axiosImage.post("/", formData);
      image = resImage.data.url;
    }

    const res = await axiosClient.put(`/products/${product.id}`, {
      name: product.name,
      price: product.price,
      description: product.description,
      image,
      status: product.status,
      writer: product.writer,
      createdAt: product.createdAt,
      categories: product.categories,
    });

    return res.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    const res = await axiosClient.delete(`/products/${id}`);
    return id;
  }
);

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id) => {
    const res = await axiosClient.get(`/products/${id}`);
    return res.data;
  }
);

export const filterName = createAsyncThunk(
  "product/filterName",
  async ({ query, page }) => {
    const res = await axiosClient.get(
      `/products?q=${query}&_limit=4&_page=${page || 1}`
    );
    return {
      result: res.data,
      total: res.headers["x-total-count"],
    };
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    currentProduct: {},
    total: 0,
    categories: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.total = +action.payload.total;
      state.loading = false;
    });
    builder.addCase(getAllProduct.rejected, (state) => {
      state.loading = false;
      swal("Lấy sản phẩm thất bại");
    });

    builder.addCase(getAllCategory.fulfilled, (state, action) => {
      state.categories = action.payload;
    });

    builder.addCase(addProduct.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.total += 1;
      if (state.products.length < 4) {
        state.products = [...state.products, action.payload];
      }
      swal("Thêm thành công");
    });

    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      swal("Xóa thành công");
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      swal("Xóa thất bại");
    });

    builder.addCase(getProductById.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.currentProduct = action.payload;
      state.loading = false;
    });

    builder.addCase(updateProduct.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(updateProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.products = state.products.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      swal("Cập nhật thành công");
    });
    builder.addCase(updateProduct.rejected, (state) => {
      state.loading = false;
      swal("Internal server");
    });

    builder.addCase(filterName.fulfilled, (state, action) => {
      state.products = action.payload.result;
      state.total = action.payload.total;
    });

    builder.addCase(filterName.rejected, (state) => {
      swal("Tìm kiếm thất bại");
    });
  },
});

export default ProductSlice.reducer;
