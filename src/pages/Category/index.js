import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchCategory from "../../components/Category/SearchCategory";
import TableCategory from "../../components/Category/TableCategory";
import ContentHandle from "../../components/ContentHandle";
import FilterProductStatus from "../../components/Filter/FilterProductStatus";
import PaginationCategory from "../../components/PaginationCategory";
import { filterNameId, getCategory } from "../../redux/CategoryReducer";
import { scrollTop } from "../../utils/ScrollTop";

const Category = () => {
  const dispatch = useDispatch();
  const { categories, loading, total } = useSelector((state) => state.category);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const typeTimeOut = useRef(null);
  const limit = 4;
  useEffect(() => {
    scrollTop();
  }, []);

  useEffect(() => {
    dispatch(getCategory(page));
  }, [page]);

  const handleChangePage = (page) => {
    setPage(page);
  };

  const handleChangeQuery = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (typeTimeOut.current) {
      clearTimeout(typeTimeOut.current);
    }

    typeTimeOut.current = setTimeout(() => {
      if (value.trim().length > 0) {
        setPage(1);
        dispatch(
          filterNameId({
            query: value,
            page,
          })
        );
      }
    }, 500);
  };

  const handleResetQuery = () => {
    setQuery("");
  };

  return (
    <div className='py-[30px] px-[20px]'>
      <ContentHandle clear={handleResetQuery} label={"danh mục"} type={1} />

      <div className='flex flex-col md:flex-row items-end mt-[19px]'>
        <SearchCategory onChange={handleChangeQuery} value={query} />
        {/* <FilterTime /> */}
        {/* <FilterProductStatus /> */}
      </div>

      <div className=' mt-[19px] rounded-[10px] shadowBox bg-white p-4 '>
        <div className='max-h-[350px] overflow-y-scroll tableCategory overflow-x-scroll'>
          <TableCategory data={categories} loading={loading} />
        </div>
        {total == 0 ? (
          ""
        ) : (
          <PaginationCategory
            count={Math.ceil(total / limit)}
            page={page}
            setPage={handleChangePage}
          />
        )}
      </div>
    </div>
  );
};

export default Category;
