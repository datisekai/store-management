import React from "react";

const FilterProductStatus = ({ status }) => {
  const statusRender = status || [
    {
      key: 1,
      value: "Đang bán",
    },
    { key: 0, value: "Ngừng bán" },
  ];
  return (
    <div className='md:mt-0 ml-0 md:ml-[30px] w-full md:w-[25%] lg:w-[20%] relative'>
      <p className='truncate'>Lọc theo trạng thái</p>
      <select className='py-2 px-5 rounded-[30px] mt-[10px] w-full outline-none text-[14px]'>
        <option value='' disabled>
          Chọn trạng thái
        </option>
        {statusRender.map((item, index) => (
          <option key={index} value={item.key}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterProductStatus;
