import React from "react";
import Pagination from "@mui/material/Pagination";

const PaginationCategory = () => {
  return (
    <div className='mt-[30px] mb-[10px] flex items-center'>
      <Pagination count={10} variant='outlined' color='primary' />
    </div>
  );
};

export default PaginationCategory;
