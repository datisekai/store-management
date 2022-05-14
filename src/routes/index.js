import LoginLayOut from "../layout/LoginLayOut";
import Home from "../pages/Home";
import Login from "../pages/Login";

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
];

export { publicRoutes, privateRoutes };
