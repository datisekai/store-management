import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaginationCategory from "../../components/PaginationCategory";
import TableStatistic from "../../components/Statistic/TableStatistic";
import {
  getCategory,
  getProduct,
  getStaff,
} from "../../redux/StatisticReducer";
import { scrollTop } from "../../utils/ScrollTop";
import BoxStatistic from "../../components/BoxStatistic";
import BoxProduct from "../../components/Statistic/BoxProduct";
import BoxStaff from "../../components/Statistic/BoxStaff";

const Statistic = () => {
  const [type, setType] = useState("category");
  const { total } = useSelector((state) => state.statistic);
  const [page, setPage] = useState(1);
  const limit = 4;
  const dispatch = useDispatch();
  useEffect(() => {
    scrollTop();
  }, []);

  useEffect(() => {
    if (type == "category") {
      dispatch(getCategory(page));
    }
    if (type == "product") {
      dispatch(getProduct());
    }
    if (type == "staff") {
      dispatch(getStaff());
    }
  }, [type, page]);

  const handleChangePage = (page) => {
    setPage(page);
  };

  return (
    <div className='py-[30px] px-[20px]'>
      <h2 className='font-bold text-[22px]'>Thống kê</h2>
      <div className='mt-[19px]'>
        <p className='truncate'>Lọc theo danh mục</p>
        <select
          name=''
          id=''
          className='py-2 px-5 rounded-[30px] mt-[10px] outline-none w-full md:w-[20%]'
          defaultValue={"category"}
          onChange={(e) => setType(e.target.value)}
        >
          <option value='category'>Category</option>
          <option value='product'>Sản phẩm</option>
          <option value='staff'>Nhân viên</option>
        </select>
      </div>

      <div className=' mt-[19px] rounded-[10px] shadowBox bg-white p-4 '>
        {type === "category" && (
          <>
            {" "}
            <div className='max-h-[350px] overflow-y-scroll tableCategory max-w-[700px] md:max-w-full overflow-x-scroll'>
              <TableStatistic type={type} />
            </div>
            <PaginationCategory
              page={page}
              setPage={handleChangePage}
              count={Math.ceil(total / limit)}
            />
          </>
        )}
        {type === "product" && <BoxProduct />}
        {type === "staff" && <BoxStaff />}
      </div>
    </div>
  );
};

export default Statistic;
