import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    display: false,
    zoom: true,
    text: true,
  },
  reducers: {
    setDisplay: (state, action) => {
      if (action.payload.display != null) {
        state.display = action.payload.display;
      }
      if (action.payload.text != null) {
        state.text = action.payload.text;
      }
      if (action.payload.zoom != null) {
        state.zoom = action.payload.zoom;
      }
    },
  },
});

export const { setDisplay } = sideBarSlice.actions;
export default sideBarSlice.reducer;
