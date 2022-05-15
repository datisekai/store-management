import AdminLayOut from "../layout/AdminLayOut";
import LoginLayOut from "../layout/LoginLayOut";
import Category from "../pages/Category";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Staff from "../pages/Staff";
import Statistic from "../pages/Statistic";

const publicRoutes = [
  {
    path: "/login",
    component: Login,
    layout: LoginLayOut,
  },
  {
    path: "/",
    component: Home,
    layout: AdminLayOut,
  },
  {
    path: "/category",
    component: Category,
    layout: AdminLayOut,
  },
  {
    path: "/product",
    component: Product,
    layout: AdminLayOut,
  },
  {
    path: "/staff",
    component: Staff,
    layout: AdminLayOut,
  },
  {
    path: "/statistic",
    component: Statistic,
    layout: AdminLayOut,
  },
];

export { publicRoutes };
