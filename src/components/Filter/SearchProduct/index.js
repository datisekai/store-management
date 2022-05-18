import React from "react";

const SearchProduct = () => {
  return (
    <div className='w-full md:w-[25%] lg:w-[20%]'>
      <p className='truncate'>Tìm kiếm sản phẩm</p>
      <div className='relative flex items-center mt-[10px]'>
        <input
          type='text'
          placeholder='Tìm kiếm theo tên'
          className='w-full placeholder:text-[14px] placeholder:text-black px-5 py-2 rounded-[30px] outline-blue-color border'
        />
        <i class='px-3 absolute right-0 fa-solid fa-magnifying-glass text-gray-color'></i>
      </div>
    </div>
  );
};

export default SearchProduct;
