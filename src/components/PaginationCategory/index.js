import React from "react";
import Pagination from "@mui/material/Pagination";

const PaginationCategory = ({ count, page, setPage }) => {
  return (
    <div className='mt-[30px] mb-[10px] flex items-center'>
      <Pagination
        count={count || 0}
        variant='outlined'
        color='primary'
        page={page}
        onChange={(e, page) => setPage(page)}
      />
    </div>
  );
};

export default PaginationCategory;
