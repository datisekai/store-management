import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";
import axiosClient from "../api/axiosClient";

export const getAllStaff = createAsyncThunk(
  "staff/getAllStaff",
  async (page) => {
    const res = await axiosClient.get(`/users?_limit=4&_page=${page || 1}`);
    return { staff: res.data, total: res.headers["x-total-count"] };
  }
);

export const getStaffById = createAsyncThunk(
  "staff/getStaffById",
  async (id) => {
    const res = await axiosClient.get(`/users/${id}`);
    return res.data;
  }
);

export const addStaff = createAsyncThunk("staff/addStaff", async (staff) => {
  const checkExist = await axiosClient.get(`/users?email=${staff.email}`);
  console.log(checkExist);
  if (checkExist.data.length > 0) {
    swal("Email is already");
    return null;
  }

  const res = await axiosClient.post(`/users`, {
    email: staff.email,
    password: staff.password,
    roleId: staff.roleId,
    username:
      staff.name == ""
        ? staff.email.slice(0, staff.email.indexOf("@"))
        : staff.name,
    createdAt: Date.now(),
  });

  return res.data;
});

export const deleteStaff = createAsyncThunk("staff/deleteStaff", async (id) => {
  const res = await axiosClient.delete(`/users/${id}`);
  return id;
});

export const updateStaff = createAsyncThunk(
  "staff/updateStaff",
  async (staff) => {
    const res = await axiosClient.put(`/users/${staff.id}`, staff);
    return res.data;
  }
);

const StaffSlice = createSlice({
  name: "staff",
  initialState: {
    staffs: [],
    loading: false,
    currentStaff: {},
    total: 0,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllStaff.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllStaff.fulfilled, (state, action) => {
      state.loading = false;
      state.staffs = action.payload.staff;
      state.total = +action.payload.total;
    });
    builder.addCase(getAllStaff.rejected, (state) => {
      state.loading = false;
      swal("Lấy nhân viên thất bại");
    });

    builder.addCase(getStaffById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getStaffById.fulfilled, (state, action) => {
      state.loading = false;
      state.currentStaff = action.payload;
    });

    builder.addCase(deleteStaff.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteStaff.fulfilled, (state, action) => {
      state.loading = false;
      state.staffs = state.staffs.filter((item) => item.id !== action.payload);
      swal("Xóa thành công");
      state.total -= 1;
    });

    builder.addCase(deleteStaff.rejected, (state) => {
      swal("Xóa thất bại");
    });

    builder.addCase(updateStaff.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateStaff.fulfilled, (state, action) => {
      state.loading = false;
      state.staffs = state.staffs.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      swal("Cập nhật thành công");
    });
    builder.addCase(updateStaff.rejected, (state) => {
      state.loading = false;
      swal("Cập nhật thất bại");
    });

    builder.addCase(addStaff.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addStaff.fulfilled, (state, action) => {
      if (action.payload !== null) {
        if (state.staffs.length < 4) {
          state.staffs = [...state.staffs, action.payload];
        }
        state.total += 1;
        swal("Thêm thành công");
      }
      state.loading = false;
    });
  },
});

export default StaffSlice.reducer;
