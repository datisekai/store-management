import React from "react";

const categories = [
  {
    image: "https://source.unsplash.com/random",
    name: "Thời trang nam",
    _id: "000099",
    desc: "Tên sản phẩm chứa nam",
    isBuy: true,
  },
  {
    image: "https://source.unsplash.com/random",
    name: "Thời trang nam",
    _id: "000099",
    desc: "Tên sản phẩm chứa nam",
    isBuy: true,
  },
  {
    image: "https://source.unsplash.com/random",
    name: "Thời trang nam",
    _id: "000099",
    desc: "Tên sản phẩm chứa nam",
    isBuy: true,
  },
  {
    image: "https://source.unsplash.com/random",
    name: "Thời trang nam",
    _id: "000099",
    desc: "Tên sản phẩm chứa nam",
    isBuy: true,
  },
  {
    image: "https://source.unsplash.com/random",
    name: "Thời trang nam",
    _id: "000099",
    desc: "Tên sản phẩm chứa nam",
    isBuy: true,
  },
  {
    image: "https://source.unsplash.com/random",
    name: "Thời trang nam",
    _id: "000099",
    desc: "Tên sản phẩm chứa nam",
    isBuy: true,
  },
  {
    image: "https://source.unsplash.com/random",
    name: "Thời trang nam",
    _id: "000099",
    desc: "Tên sản phẩm chứa nam",
    isBuy: true,
  },
  {
    image: "https://source.unsplash.com/random",
    name: "Thời trang nam",
    _id: "000099",
    desc: "Tên sản phẩm chứa nam",
    isBuy: true,
  },
];

const TableCategory = () => {
  return (
    <table className='w-full relative'>
      <tr className='rounded-[30px]'>
        <th className='font-medium py-2 border-r'>Hình ảnh</th>
        <th className='font-medium py-2 border-r'>Tên danh mục</th>
        <th className='font-medium py-2 border-r'>Mã danh mục</th>
        <th className='font-medium py-2 border-r'>Mô tả</th>
        <th className='font-medium py-2'>Mở bán</th>
      </tr>

      {categories.map((item, index) => (
        <tr className='text-center' key={index}>
          <td className='font-normal border-r py-1'>
            <img
              src={item.image}
              alt=''
              className='w-[50px] h-[45px] object-cover mx-auto rounded-[10px]'
            />
          </td>
          <td className='font-normal border-r py-1'>{item.name}</td>
          <td className='font-normal border-r py-1'>{item._id}</td>
          <td className='font-normal border-r py-1'>{item.desc + ""}</td>
          <td className='font-normal py-1'>{item.isBuy + ""}</td>
        </tr>
      ))}
    </table>
  );
};

export default TableCategory;
