import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";

const AdminLayOut = ({ children }) => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='bg-main-color w-full'>
        <Header />
        <div className='min-h-screen'>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayOut;
