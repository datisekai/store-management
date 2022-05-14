import AdminLayOut from "../layout/AdminLayOut";
import LoginLayOut from "../layout/LoginLayOut";
import Home from "../pages/Home";
import Login from "../pages/Login";

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
];

export { publicRoutes };
