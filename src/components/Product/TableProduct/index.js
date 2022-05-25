import React, { useState } from "react";
import ModalUpdateProduct from "../ModalUpdateProduct";
import formatDate from "../../../utils/FormatDate";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  getAllProduct,
  getProductById,
} from "../../../redux/ProductReducer";
import swal from "sweetalert";
import limitText from "../../../utils/limitText";

const TableProduct = ({ products, page }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteProduct(id));
        dispatch(getAllProduct(page));
      }
    });
  };

  const handleGetProduct = (id) => {
    dispatch(getProductById(id));
  };
  return (
    <>
      <table className='w-full relative'>
        <thead>
          <tr className='rounded-[30px]'>
            <th className='font-medium px-1   py-2 border-r'>Hình ảnh</th>
            <th className='font-medium px-1   py-2 border-r'>Tên sản phẩm</th>
            <th className='font-medium px-1   py-2 border-r'>Mã sản phẩm</th>
            <th className='font-medium px-1   py-2 border-r'>Danh mục</th>
            <th className='font-medium px-1   py-2 border-r'>Trạng thái</th>
            <th className='font-medium px-1   py-2'>Hành động</th>
          </tr>
        </thead>

        <tbody>
          {products?.map((item, index) => (
            <tr className='text-center' key={index}>
              <td className='font-normal   border-r py-1 px-1'>
                <img
                  src={item.image}
                  alt=''
                  className='w-[50px] h-[45px] object-cover mx-auto rounded-[10px]'
                />
              </td>
              <td className='font-normal   border-r py-1 px-1 truncate'>
                {limitText(item.name)}
              </td>
              <td className='font-normal   border-r py-1 px-1'>{item.id}</td>
              <td className='font-normal    py-1 flex items-center flex-wrap px-2'>
                {item?.categories?.map((item, index) => (
                  <span
                    className='px-2 py-1 text-black bg-main-color rounded-[5px] ml-1 mt-1'
                    key={index}
                  >
                    {limitText(item.name)}
                  </span>
                ))}
              </td>

              <td className='font-normal border-l  py-1 px-1 border-r'>
                {item.status == 1 ? "Đang bán" : "Ngừng bán"}
              </td>
              <td className='font-normal   text-white border-r py-1 px-1 flex flex-col items-center px-2'>
                <button
                  className='w-full transition-all hover:bg-green-800 py-1 rounded-[5px] bg-[#008816]'
                  onClick={() => {
                    handleGetProduct(item.id);
                    setOpenModal(true);
                  }}
                >
                  Cập nhật
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className='w-full transition-all hover:bg-red-600 mt-1 py-1 rounded-[5px] bg-[#FE4543]'
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalUpdateProduct open={openModal} handleClose={handleCloseModal} />
    </>
  );
};

export default TableProduct;
