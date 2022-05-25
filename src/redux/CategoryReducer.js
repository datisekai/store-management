import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";
import axiosClient from "../api/axiosClient";
import axiosImage from "../api/axiosImage";

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (page) => {
    const res = await axiosClient.get(
      `/categories?_limit=4&_page=${page || 1}`
    );
    return {
      categories: res.data,
      total: res.headers["x-total-count"],
    };
  }
);

export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (category) => {
    const formData = new FormData();
    formData.append("file", category.file);
    formData.append("upload_preset", "k7g9rfyh");
    const resImage = await axiosImage.post("/", formData);
    const image = resImage.data.url;

    const res = await axiosClient.post("/categories", {
      name: category.name,
      image,
      descr: category.desc,
      isSell: category.isSell ? 1 : 0,
    });

    return res.data;
  }
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (category) => {
    const res = await axiosClient.delete(`/categories/${category.id}`);
    return category.id;
  }
);

export const updateCategory = createAsyncThunk(
  "category/updateCategory",
  async (category) => {
    let image = category.image;
    if (category.file) {
      const formData = new FormData();
      formData.append("file", category.file);
      formData.append("upload_preset", "k7g9rfyh");
      const resImage = await axiosImage.post("/", formData);
      image = resImage.data.url;
    }
    const res = await axiosClient.put(`/categories/${category.id}`, {
      name: category.name,
      image: image,
      descr: category.descr,
      isSell: category.isSell ? 1 : 0,
    });
    return res.data;
  }
);

export const getCategoryById = createAsyncThunk(
  "category/getCategoryById",
  async (id) => {
    const res = await axiosClient.get(`/categories/${id}`);
    return res.data;
  }
);

export const filterNameId = createAsyncThunk(
  "category/filterNameId",
  async ({ query, page }) => {
    const res = await axiosClient.get(
      `/categories?q=${query}&_page=${page || 1}&_limit=4`
    );
    return {
      result: res.data,
      total: res.headers["x-total-count"],
    };
  }
);

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    loading: false,
    total: 0,
    currentCategory: {},
  },
  reducers: {
    setCategory: (state, action) => {
      state.categories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.categories = action.payload.categories;
      state.loading = false;
      state.total = +action.payload.total;
    });

    builder.addCase(addCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addCategory.fulfilled, (state, action) => {
      // state.categories = [...state.categories, action.payload[0]];
      state.loading = false;
      swal("Thêm thành công");
      state.total += 1;
    });
    builder.addCase(addCategory.rejected, (state) => {
      state.loading = false;
      swal("Thêm thất bại");
    });

    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.categories = state.categories.filter(
        (item) => item.id !== action.payload
      );
      state.total -= 1;
      swal("Xóa thành công");
    });

    builder.addCase(getCategoryById.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getCategoryById.fulfilled, (state, action) => {
      state.currentCategory = action.payload;
      state.loading = false;
    });

    builder.addCase(updateCategory.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(updateCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = state.categories.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      swal("Cập nhật thành công");
    });

    builder.addCase(filterNameId.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(filterNameId.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload.result;
      state.total = action.payload.total;
    });

    builder.addCase(filterNameId.rejected, (state) => {
      swal("Tìm kiếm thất bại");
    });
  },
});

export default CategorySlice.reducer;
