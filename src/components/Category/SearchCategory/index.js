import React from "react";

const SearchCategory = ({ onChange, value }) => {
  return (
    <div className='w-full md:w-[25%] lg:w-[20%]'>
      <p>Tìm kiếm danh mục</p>
      <div className='relative flex items-center mt-[10px]'>
        <input
          type='text'
          onChange={onChange}
          value={value}
          placeholder='Tìm kiếm theo tên danh mục'
          className='w-full placeholder:text-[14px] px-5 py-2 rounded-[30px] outline-blue-color border'
        />
        <i className='px-3 absolute right-0 fa-solid fa-magnifying-glass text-gray-color'></i>
      </div>
    </div>
  );
};

export default SearchCategory;
