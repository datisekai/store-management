import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import CategoryReducer from "./CategoryReducer";
import ProductReducer from "./ProductReducer";
import SideBarReducer from "./SideBarReducer";
import StaffReducer from "./StaffReducer";
import UserReducer from "./UserReducer";

const store = configureStore({
  reducer: {
    sidebar: SideBarReducer,
    auth: AuthReducer,
    user: UserReducer,
    product: ProductReducer,
    category: CategoryReducer,
    staff: StaffReducer,
  },
});

export default store;
