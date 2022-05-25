import React, { useState } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import {
  deleteCategory,
  getCategory,
  getCategoryById,
} from "../../../redux/CategoryReducer";
import limitText from "../../../utils/limitText";
import ModalUpdateCategory from "../ModalUpdateCategory";

const TableCategory = ({ data, loading }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const dispatch = useDispatch();

  const handleDelete = (item) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteCategory(item));
        dispatch(getCategory());
      }
    });
  };

  const handleShow = (id) => {
    dispatch(getCategoryById(id));
  };

  return (
    <>
      <table className='w-full relative'>
        <thead>
          <tr className='rounded-[30px]'>
            <th className='font-medium px-1 py-2 border-r '>Hình ảnh</th>
            <th className='font-medium px-1 py-2 border-r  '>Tên danh mục</th>
            <th className='font-medium px-1 py-2 border-r  '>Mã danh mục</th>
            <th className='font-medium px-1 py-2 border-r  '>Mô tả</th>
            <th className='font-medium px-1 py-2 border-r  '>Mở bán</th>
            <th className='font-medium px-1 py-2  '>Hành động</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr className='text-center' key={index}>
              <td className='font-normal px-1 border-r py-1  '>
                <img
                  src={item.image}
                  alt=''
                  className='w-[50px] h-[45px] object-cover mx-auto rounded-[10px]'
                />
              </td>
              <td className='font-normal px-1 border-r py-1  '>{item.name}</td>
              <td className='font-normal px-1 border-r py-1  '>{item.id}</td>
              <td className='font-normal px-1 border-r py-1  '>
                {limitText(item.descr)}
              </td>
              <td className='font-normal px-1 py-1  border-r'>
                {item.isSell == 0 ? "Ngừng bán" : "Đang bán"}
              </td>
              <td className='font-normal  text-white py-1  flex flex-col items-center px-2'>
                <button
                  className='w-full transition-all hover:bg-green-800 py-1 rounded-[5px] bg-[#008816]'
                  onClick={() => {
                    handleShow(item.id);
                    setOpenModal(true);
                  }}
                >
                  Cập nhật
                </button>
                <button
                  className='w-full transition-all hover:bg-red-600 mt-1 py-1 rounded-[5px] bg-[#FE4543]'
                  onClick={() => handleDelete(item)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalUpdateCategory open={openModal} handleClose={handleCloseModal} />
    </>
  );
};

export default TableCategory;
