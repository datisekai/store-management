import React, { useEffect } from "react";
import ContentHandle from "../../components/ContentHandle";
import PaginationCategory from "../../components/PaginationCategory";
import FilterProductCategory from "../../components/Filter/FilterProductCategory";
import FilterProductStatus from "../../components/Filter/FilterProductStatus";
import SearchProduct from "../../components/Filter/SearchProduct";
import TableProduct from "../../components/Product/TableProduct";
import { scrollTop } from "../../utils/ScrollTop";

const Product = () => {
  useEffect(() => {
    scrollTop();
  }, []);
  return (
    <div className='py-[30px] px-[20px]'>
      <ContentHandle label={"sản phẩm"} />

      <div className='mt-[19px] flex items-center flex-col md:flex-row'>
        <SearchProduct />
        <FilterProductCategory />
        <FilterProductStatus />
      </div>

      <div className=' mt-[19px] rounded-[10px] shadowBox bg-white p-4 '>
        <div className='max-h-[350px] overflow-y-scroll tableCategory max-w-[700px] md:max-w-full overflow-x-scroll'>
          <TableProduct />
        </div>
        <PaginationCategory />
      </div>
    </div>
  );
};

export default Product;
