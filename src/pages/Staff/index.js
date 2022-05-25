import React, { useEffect, useState } from "react";
import ContentHandle from "../../components/ContentHandle";
import FilterProductCategory from "../../components/Filter/FilterProductCategory";
import PaginationCategory from "../../components/PaginationCategory";
import FilterProductStatus from "../../components/Filter/FilterProductStatus";
import SearchProduct from "../../components/Filter/SearchProduct";
import TableStaff from "../../components/Staff/TableStaff";
import { scrollTop } from "../../utils/ScrollTop";
import { useDispatch, useSelector } from "react-redux";
import { getAllStaff } from "../../redux/StaffReducer";

const Staff = () => {
  const [page, setPage] = useState(1);
  const { loading, total, staffs } = useSelector((state) => state.staff);
  const limit = 4;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStaff(page));
  }, [page]);

  useEffect(() => {
    scrollTop();
  }, []);

  const handleChangePage = (page) => {
    setPage(page);
  };

  return (
    <div className='py-[30px] px-[20px]'>
      <ContentHandle label={"nhân viên"} />

      <div className='mt-[19px] flex items-center flex-col md:flex-row'>
        <SearchProduct />
        {/* <FilterProductCategory /> */}
        {/* <FilterProductStatus /> */}
      </div>

      <div className=' mt-[19px] rounded-[10px] shadowBox bg-white p-4 '>
        <div className='max-h-[350px] overflow-y-scroll tableCategory max-w-[700px] md:max-w-full overflow-x-scroll'>
          <TableStaff staffs={staffs} page={page} />
        </div>
        <PaginationCategory
          count={Math.ceil(total / limit)}
          page={page}
          setPage={handleChangePage}
        />
      </div>
    </div>
  );
};

export default Staff;
