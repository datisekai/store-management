import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AdminLayOut from "../AdminLayOut";

const PrivateLayOut = ({ children }) => {
  if (localStorage.getItem("token") == null) {
    return <Navigate to={"/login"} />;
  }
  return <AdminLayOut children={children} />;
};

export default PrivateLayOut;
