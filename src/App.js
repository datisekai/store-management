import { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import DefaultLayout from "./layout/DefaultLayOut";
import PrivateLayOut from "./layout/PrivateLayOut";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/UserReducer";
import axiosClient from "./api/axiosClient";

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    getUserInfo();
  }, [token]);

  const getUserInfo = () => {
    if (localStorage.getItem("token") !== null) {
      axiosClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("token")}`;
      dispatch(getUser(localStorage.getItem("token")));
    }
  };

  return (
    <div className='App'>
      <Routes>
        {publicRoutes?.map((route, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            ></Route>
          );
        })}

        {privateRoutes?.map((route, index) => {
          const Page = route.component;
          let Layout = PrivateLayOut;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            ></Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
