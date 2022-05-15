import React from "react";

const paginations = [1, 2, 3, 4, 5, 6, 7];

const PaginationCategory = () => {
  return (
    <div className='mt-[30px] mb-[10px] flex items-center'>
      {paginations.map((item, index) => (
        <button
          key={index}
          className='border border-blue-color rounded-full text-blue-color font-medium w-[33px] h-[33px] ml-[10px]'
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default PaginationCategory;
