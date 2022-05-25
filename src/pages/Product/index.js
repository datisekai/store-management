import React, { useEffect, useRef, useState } from "react";
import ContentHandle from "../../components/ContentHandle";
import PaginationCategory from "../../components/PaginationCategory";
import FilterProductCategory from "../../components/Filter/FilterProductCategory";
import FilterProductStatus from "../../components/Filter/FilterProductStatus";
import SearchProduct from "../../components/Filter/SearchProduct";
import TableProduct from "../../components/Product/TableProduct";
import { scrollTop } from "../../utils/ScrollTop";
import { useDispatch, useSelector } from "react-redux";
import { filterName, getAllProduct } from "../../redux/ProductReducer";
import formatDate from "../../utils/FormatDate";
import { getAllCategory } from "../../redux/ProductReducer";

const Product = () => {
  const [page, setPage] = useState(1);
  const { products, loading, total } = useSelector((state) => state.product);
  const limit = 4;
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const typeTimeOut = useRef(null);
  useEffect(() => {
    scrollTop();
  }, []);

  useEffect(() => {
    dispatch(getAllProduct(page));
  }, [page]);

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

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
          filterName({
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
      <ContentHandle label={"sản phẩm"} clear={handleResetQuery} type={2} />

      <div className='mt-[19px] flex items-center flex-col md:flex-row'>
        <SearchProduct value={query} onChange={handleChangeQuery} />
        {/* <FilterProductCategory /> */}
        {/* <FilterProductStatus /> */}
      </div>

      <div className=' mt-[19px] rounded-[10px] shadowBox bg-white p-4 '>
        <div className='max-h-[350px] overflow-y-scroll tableCategory max-w-[700px] md:max-w-full overflow-x-scroll'>
          <TableProduct products={products} page={page} />
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

export default Product;
