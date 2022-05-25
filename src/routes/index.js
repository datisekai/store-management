import AdminLayOut from "../layout/AdminLayOut";
import LoginLayOut from "../layout/LoginLayOut";
import PrivateLayOut from "../layout/PrivateLayOut";
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
];

const privateRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/product",
    component: Product,
  },
  {
    path: "/staff",
    component: Staff,
  },
  {
    path: "/statistic",
    component: Statistic,
  },
];

export { publicRoutes, privateRoutes };
