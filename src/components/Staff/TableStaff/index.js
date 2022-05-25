import React, { useState } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import {
  deleteStaff,
  getAllStaff,
  getStaffById,
} from "../../../redux/StaffReducer";
import formatDate from "../../../utils/FormatDate";
import ModalUpdateStaff from "../ModalUpdateStaff";

const TableStaff = ({ staffs, page }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleDeleteStaff = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteStaff(id));
        dispatch(getAllStaff(page));
      }
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleGetStaff = (id) => {
    dispatch(getStaffById(id));
  };
  return (
    <>
      <table className='w-full relative'>
        <thead>
          <tr className='rounded-[30px]'>
            <th className='font-medium py-2 border-r'>Tên nhân viên</th>
            <th className='font-medium py-2 border-r'>Mã nhân viên</th>
            <th className='font-medium py-2 border-r'>Chức vụ</th>
            <th className='font-medium py-2 border-r'>Ngày tạo</th>
            <th className='font-medium py-2 border-r'>Email</th>
            <th className='font-medium py-2'>Hành động</th>
          </tr>
        </thead>

        <tbody>
          {staffs.map((item, index) => (
            <tr className='text-center' key={index}>
              <td className='font-normal border-r py-1 px-1'>
                {item.username || "Chưa có"}
              </td>

              <td className='font-normal border-r py-1 px-1'>{item.id}</td>
              <td className='font-normal border-r py-1 px-1 capitalize'>
                {item.roleId}
              </td>
              <td className='font-normal border-r py-1 px-1'>
                {formatDate(item.createdAt || Date.now())}
              </td>
              <td className='font-normal py-1 px-1 border-r'>{item.email}</td>
              <td className='font-normal text-white border-r py-1 px-1 flex flex-col items-center px-2'>
                <button
                  className='w-full transition-all hover:bg-green-800 py-1 rounded-[5px] bg-[#008816]'
                  onClick={() => {
                    handleGetStaff(item.id);
                    setOpen(true);
                  }}
                >
                  Cập nhật
                </button>
                <button
                  onClick={() => handleDeleteStaff(item.id)}
                  className='w-full transition-all hover:bg-red-600 mt-1 py-1 rounded-[5px] bg-[#FE4543]'
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalUpdateStaff open={open} handleClose={handleClose} />
    </>
  );
};

export default TableStaff;
