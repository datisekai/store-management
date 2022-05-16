import React, { useState } from "react";
const categoriesTime = ["Hôm nay", "Hôm qua", "Tuần này", "Tuần trước"];
const FilterTime = () => {
  const [showOption, setShowOption] = useState(false);
  return (
    <div className='mt-[12px] md:mt-0 ml-[30px] w-full md:w-[25%] lg:w-[20%] relative'>
      <p>Lọc theo thời gian</p>
      <div
        className='relative mt-[10px] flex items-center cursor-pointer'
        onClick={() => setShowOption(!showOption)}
      >
        <input
          type='text'
          readOnly
          className='outline-none w-full placeholder:text-[14px] rounded-[30px] px-5 py-2 border'
          placeholder='Chọn thời gian '
        />
        <i class='px-3 absolute right-0 text-blue-color text-xl fa-solid fa-circle-chevron-down'></i>
      </div>
      <div
        className={`${
          showOption ? "block" : "hidden"
        } absolute mt-1 bg-white border z-30 border-[rgba(128, 128, 128, 0.3)] w-full rounded-[10px] shadowBox pt-[18px] pb-2 select-none`}
      >
        <div className='flex items-center justify-between text-gray-color text-[13px]'>
          <div className='w-[50%] text-center border py-2'>
            <input
              type='date'
              className='outline-none select-none'
              onChange={(e) => console.log(new Date(e.target.value).getTime())}
            />
          </div>
          <div className='w-[50%] text-center border py-2'>
            <input type='date' className='outline-none select-none' />
          </div>
        </div>
        <select
          name=''
          id=''
          multiple
          className='outline-none w-full mt-2 categoryTime text-[14px] select-none'
        >
          {categoriesTime.map((item, index) => (
            <option value={item} key={index} className={"py-[6px]  px-[30px] "}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterTime;
