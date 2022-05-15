import { configureStore } from "@reduxjs/toolkit";
import SideBarReducer from "./SideBarReducer";

const store = configureStore({
  reducer: {
    sidebar: SideBarReducer,
  },
});

export default store;
