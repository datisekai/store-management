import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";

const AdminLayOut = ({ children }) => {
  const { text } = useSelector((state) => state.sidebar);
  return (
    <div className='flex'>
      <Sidebar />
      <div
        className={`hidden md:block ${
          text ? "md:w-[180px] lg:w-[167px]" : "w-[74px]"
        }`}
      ></div>
      <div className='bg-main-color w-full'>
        <Header />
        <div className='min-h-screen'>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayOut;
