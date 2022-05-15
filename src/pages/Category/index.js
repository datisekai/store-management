import React from "react";
import FilterTime from "../../components/FilterTime";
import PaginationCategory from "../../components/PaginationCategory";
import TableCategory from "../../components/TableCategory";

const Category = () => {
  return (
    <div className='py-[30px] px-[20px]'>
      <h2 className='font-bold text-[22px]'>Quản lý danh mục</h2>

      <div className='flex items-end mt-[19px]'>
        <div className='w-[20%]'>
          <p>Tìm kiếm danh mục</p>
          <div className='relative flex items-center mt-[10px]'>
            <input
              type='text'
              name=''
              id=''
              placeholder='Tìm kiếm theo mã, danh mục'
              className='w-full placeholder:text-[14px] px-5 py-2 rounded-[30px] outline-blue-color border'
            />
            <i class='px-3 absolute right-0 fa-solid fa-magnifying-glass text-gray-color'></i>
          </div>
        </div>
        <FilterTime />
        <div className='ml-[30px] w-[15%]'>
          <button className='border px-5 py-2 w-full rounded-[30px] text-[14px] hover:bg-gray-700 transition-all bg-gray-color text-white font-bold'>
            Bỏ bộ lọc
          </button>
        </div>
      </div>

      <div className='mt-[19px] rounded-[10px] shadowBox bg-white p-4'>
        <TableCategory />
        <PaginationCategory />
      </div>
    </div>
  );
};

export default Category;
