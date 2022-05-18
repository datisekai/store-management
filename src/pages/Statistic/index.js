import React, { useEffect } from "react";
import TableStatistic from "../../components/Statistic/TableStatistic";
import { scrollTop } from "../../utils/ScrollTop";

const Statistic = () => {
  useEffect(() => {
    scrollTop();
  }, []);
  return (
    <div className='py-[30px] px-[20px]'>
      <h2 className='font-bold text-[22px]'>Thống kê</h2>
      <div className='mt-[19px]'>
        <p className='truncate'>Lọc theo danh mục</p>
        <select
          name=''
          id=''
          className='py-2 px-5 rounded-[30px] mt-[10px] outline-none w-full md:w-[20%]'
        >
          <option value=''>Category</option>
          <option value=''>Sản phẩm</option>
          <option value=''>Nhân viên</option>
        </select>
      </div>

      <div className=' mt-[19px] rounded-[10px] shadowBox bg-white p-4 '>
        <div className='max-h-[350px] overflow-y-scroll tableCategory max-w-[700px] md:max-w-full overflow-x-scroll'>
          <TableStatistic />
        </div>
      </div>
    </div>
  );
};

export default Statistic;
