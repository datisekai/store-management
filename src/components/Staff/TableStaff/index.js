import React from "react";

const staffs = [
  {
    name: "Datisekai",
    _id: 1,
    position: "Quản lý",
    createdAt: "2022-18-05",
    status: true,
  },
  {
    name: "Datisekai",
    _id: 1,
    position: "Quản lý",
    createdAt: "2022-18-05",
    status: true,
  },
  {
    name: "Datisekai",
    _id: 1,
    position: "Quản lý",
    createdAt: "2022-18-05",
    status: true,
  },
  {
    name: "Datisekai",
    _id: 1,
    position: "Quản lý",
    createdAt: "2022-18-05",
    status: true,
  },
  {
    name: "Datisekai",
    _id: 1,
    position: "Quản lý",
    createdAt: "2022-18-05",
    status: true,
  },
];

const TableStaff = () => {
  return (
    <table className='w-full relative'>
      <tr className='rounded-[30px]'>
        <th className='font-medium py-2 border-r'>Tên nhân viên</th>
        <th className='font-medium py-2 border-r'>Mã nhân viên</th>
        <th className='font-medium py-2 border-r'>Chức vụ</th>
        <th className='font-medium py-2 border-r'>Ngày tạo</th>
        <th className='font-medium py-2 border-r'>Trạng thái</th>
        <th className='font-medium py-2'>Hành động</th>
      </tr>

      {staffs.map((item, index) => (
        <tr className='text-center' key={index}>
          <td className='font-normal border-r py-1 px-1'>{item.name}</td>

          <td className='font-normal border-r py-1 px-1'>{item._id}</td>
          <td className='font-normal border-r py-1 px-1 '>{item.position}</td>
          <td className='font-normal border-r py-1 px-1'>
            {item.createdAt + ""}
          </td>
          <td className='font-normal py-1 px-1 border-r'>
            {item.status ? "Hoạt động" : "Ngừng hoạt động"}
          </td>
          <td className='font-normal text-white border-r py-1 px-1 flex flex-col items-center px-2'>
            <button className='w-full transition-all hover:bg-green-800 py-1 rounded-[5px] bg-[#008816]'>
              Cập nhật
            </button>
            <button className='w-full transition-all hover:bg-red-600 mt-1 py-1 rounded-[5px] bg-[#FE4543]'>
              Xóa
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default TableStaff;
