import React from "react";
import { useSelector } from "react-redux";

const BoxStaff = () => {
  const { staff } = useSelector((state) => state.statistic);
  return (
    <div className='w-[90%] mx-auto md:w-[400px]'>
      <p>Số nhân viên: {staff.length}</p>
      <p>Số User: {staff.filter((item) => item.roleId == "user").length}</p>
      <p>Số Admin: {staff.filter((item) => item.roleId == "admin").length}</p>
    </div>
  );
};

export default BoxStaff;
