import React, { useEffect } from "react";
import FilterTime from "../../components/Category/FilterTime";
import PaginationCategory from "../../components/PaginationCategory";
import TableCategory from "../../components/Category/TableCategory";
import SearchCategory from "../../components/Category/SearchCategory";
import { scrollTop } from "../../utils/ScrollTop";

const Category = () => {
  useEffect(() => {
    scrollTop();
  }, []);
  return (
    <div className='py-[30px] px-[20px]'>
      <h2 className='font-bold text-[22px]'>Quản lý danh mục</h2>

      <div className='flex flex-col md:flex-row items-end mt-[19px]'>
        <SearchCategory />
        <FilterTime />
        <div className='mx-auto mt-[20px] md:mt-0 md:ml-[30px] w-full md:w-[20%] lg:w-[15%] '>
          <button className='flex justify-center items-center border px-5 py-2 w-full rounded-[30px] text-[14px] hover:bg-gray-700 transition-all bg-gray-color text-white font-bold'>
            <img
              src='./images/iconclean.png'
              className='w-[25px] h-[25px]'
              alt=''
            />
            <span className='text-center'> Bỏ bộ lọc</span>
          </button>
        </div>
      </div>

      <div className=' mt-[19px] rounded-[10px] shadowBox bg-white p-4 '>
        <div className='max-h-[350px] overflow-y-scroll tableCategory'>
          <TableCategory />
        </div>
        <PaginationCategory />
      </div>
    </div>
  );
};

export default Category;
