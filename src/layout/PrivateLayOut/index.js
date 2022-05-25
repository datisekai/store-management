import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AdminLayOut from "../AdminLayOut";
import Title from "../../utils/Title";

const PrivateLayOut = ({ children }) => {
  if (localStorage.getItem("token") == null) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <Title title={"DStore | Store Management"} />
      <AdminLayOut children={children} />
    </>
  );
};

export default PrivateLayOut;
