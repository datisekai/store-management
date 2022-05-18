import React, { useEffect } from "react";
import FilterTime from "../../components/Category/FilterTime";
import PaginationCategory from "../../components/PaginationCategory";
import TableCategory from "../../components/Category/TableCategory";
import SearchCategory from "../../components/Category/SearchCategory";
import { scrollTop } from "../../utils/ScrollTop";
import ContentHandle from "../../components/ContentHandle";

const Category = () => {
  useEffect(() => {
    scrollTop();
  }, []);
  return (
    <div className='py-[30px] px-[20px]'>
      <ContentHandle label={"danh mục"} />

      <div className='flex flex-col md:flex-row items-end mt-[19px]'>
        <SearchCategory />
        <FilterTime />
      </div>

      <div className=' mt-[19px] rounded-[10px] shadowBox bg-white p-4 '>
        <div className='max-h-[350px] overflow-y-scroll tableCategory'>
          <TableCategory />
        </div>
        <PaginationCategory />
      </div>
    </div>
  );
};

export default Category;
