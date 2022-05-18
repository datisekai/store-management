import React, { useEffect } from "react";
import ContentHandle from "../../components/ContentHandle";
import FilterProductCategory from "../../components/Filter/FilterProductCategory";
import PaginationCategory from "../../components/PaginationCategory";
import FilterProductStatus from "../../components/Filter/FilterProductStatus";
import SearchProduct from "../../components/Filter/SearchProduct";
import TableStaff from "../../components/Staff/TableStaff";
import { scrollTop } from "../../utils/ScrollTop";

const Staff = () => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className='py-[30px] px-[20px]'>
      <ContentHandle label={"nhân viên"} />

      <div className='mt-[19px] flex items-center flex-col md:flex-row'>
        <SearchProduct />
        <FilterProductCategory />
        <FilterProductStatus />
      </div>

      <div className=' mt-[19px] rounded-[10px] shadowBox bg-white p-4 '>
        <div className='max-h-[350px] overflow-y-scroll tableCategory max-w-[700px] md:max-w-full overflow-x-scroll'>
          <TableStaff />
        </div>
        <PaginationCategory />
      </div>
    </div>
  );
};

export default Staff;
