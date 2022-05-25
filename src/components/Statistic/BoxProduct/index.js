import React from "react";
import { useSelector } from "react-redux";

const BoxProduct = () => {
  const { product } = useSelector((state) => state.statistic);
  return (
    <div className='w-[90%] mx-auto md:w-[400px]'>
      <p>Số sản phẩm: {product.length}</p>
      <p>
        Số sản phẩm đang bán:{" "}
        {product.filter((item) => item.status != 0).length}
      </p>
      <p>
        Số sản phẩm ngừng bán:{" "}
        {product.filter((item) => item.status == 0).length}
      </p>
    </div>
  );
};

export default BoxProduct;
