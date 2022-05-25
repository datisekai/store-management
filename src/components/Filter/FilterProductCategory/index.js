import React, { useState } from "react";
const categoriesTime = ["Hôm nay", "Hôm qua", "Tuần này", "Tuần trước"];
const FilterProductCategory = () => {
  return (
    <div className='md:mt-0 ml-0 md:ml-[30px] w-full md:w-[25%] lg:w-[20%] relative'>
      <p className='truncate'>Lọc theo thời gian</p>
      <select
        name=''
        id=''
        className='py-2 px-5 rounded-[30px] mt-[10px] w-full outline-none text-[14px]'
      >
        {categoriesTime.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterProductCategory;
