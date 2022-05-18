import React from "react";

const ContentHandle = ({ label }) => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between'>
      <h2 className='font-bold text-[22px] w-full lg:w-[30%]'>
        Quản lý {label}
      </h2>
      <div className='flex items-center flex-col md:flex-row w-full lg:w-[70%]'>
        <button className='ml-2 w-full mt-2 transition-all hover:bg-gray-600 md:mt-0 rounded-[10px] px-5 py-2 text-white text-[14px] font-semibold bg-gray-color flex items-center'>
          <img
            src='./images/iconclean.png'
            className='w-[25px] h-[25px]'
            alt=''
          />{" "}
          <span className='truncate'> Bỏ bộ lọc</span>
        </button>
        <button className='flex w-full mt-2 transition-all hover:bg-green-800 md:mt-0 items-center ml-2 rounded-[10px] px-5 py-2 text-white text-[14px] font-semibold bg-[#008816]'>
          <img
            src='./images/iconimport.png'
            className='w-[25px] h-[25px]'
            alt=''
          />{" "}
          <span className='truncate'> Import {label}</span>
        </button>
        <button className='flex w-full mt-2 transition-all hover:bg-red-600 md:mt-0 items-center ml-2 rounded-[10px] px-5 py-2 text-white text-[14px] font-semibold bg-[#FE4543]'>
          <img
            src='./images/iconexport.png'
            className='w-[25px] h-[25px]'
            alt=''
          />{" "}
          <span className='truncate'>Export {label}</span>
        </button>
        <button className='ml-2 w-full mt-2 transition-all hover:bg-yellow-600 md:mt-0 rounded-[10px] px-5 py-2 text-white text-[14px] font-semibold bg-[#FBBC05] flex items-center'>
          <img
            src='./images/iconadd.png'
            className='w-[25px] h-[25px]'
            alt=''
          />{" "}
          <span className='truncate'>Tạo {label}</span>
        </button>
      </div>
    </div>
  );
};

export default ContentHandle;
