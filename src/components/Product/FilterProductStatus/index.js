import React from "react";

const status = ["Đang bán", "Chưa bán"];

const FilterProductStatus = () => {
  return (
    <div className='md:mt-0 ml-0 md:ml-[30px] w-full md:w-[25%] lg:w-[20%] relative'>
      <p className='truncate'>Lọc theo trạng thái</p>
      <select className='py-2 px-5 rounded-[30px] mt-[10px] w-full outline-none'>
        {status.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterProductStatus;
