import React from "react";
import CountUp from "react-countup";

const BoxStatistic = ({ statistic }) => {
  return (
    <div className='rounded-[10px] bg-white shadowBox pt-3 pb-5 px-3'>
      <div className='flex items-center'>
        <img
          src={`./images/${statistic.image}`}
          className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]'
          alt=''
        />
        <div className='w-full '>
          <p className='text-lg sm:text-xl text-center font-semibold'>
            <CountUp end={statistic.quantity} duration={1} />
          </p>
          <p className='text-center text-sm sm:text-[16px]'>
            {statistic.label}
          </p>
        </div>
      </div>
      {/* <p className='text-center'>
        (Tăng {statistic.percent}% số hàng đã xuất so với tháng trước)
      </p> */}
    </div>
  );
};

export default BoxStatistic;
