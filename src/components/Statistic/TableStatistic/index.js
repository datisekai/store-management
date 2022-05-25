import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useSelector } from "react-redux";
const statistics = [
  {
    name: "Thời trang",
    _id: 1,
    quantityImport: 12,
    quantityExport: 13,
    sum: 230000,
  },
  {
    name: "Thời trang",
    _id: 1,
    quantityImport: 12,
    quantityExport: 13,
    sum: 230000,
  },
  {
    name: "Thời trang",
    _id: 1,
    quantityImport: 12,
    quantityExport: 13,
    sum: 230000,
  },
  {
    name: "Thời trang",
    _id: 1,
    quantityImport: 12,
    quantityExport: 13,
    sum: 230000,
  },
  {
    name: "Thời trang",
    _id: 1,
    quantityImport: 12,
    quantityExport: 13,
    sum: 230000,
  },
  // {
  //   name:'abc',
  //   id:'123',
  //   total:20,
  // }
];

const TableStatistic = ({ type }) => {
  const { category, product, staff } = useSelector((state) => state.statistic);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (category && product) {
      const listCategories = [];
      category.map((item) => {
        let count = 0;
        let sum = 0;
        product.map((productItem) => {
          productItem.categories.map((categoryItem) => {
            if (categoryItem.id == item.id) {
              count++;
              sum += +productItem.price;
            }
          });
        });
        listCategories.push({
          id: item.id,
          name: item.name,
          quantity: count,
          sum,
        });
      });

      setCategories(listCategories);
    }
  }, [category]);

  return (
    <table className='w-full relative'>
      {type === "category" ? (
        <tr className='rounded-[30px]'>
          <th className='font-medium py-2 border-r'>Tên loại</th>
          <th className='font-medium py-2 border-r'>ID loại</th>
          <th className='font-medium py-2 border-r'>Số lượng sản phẩm</th>
          <th className='font-medium py-2 border-r'>Tổng tiền</th>{" "}
        </tr>
      ) : (
        " "
      )}

      {type === "category" &&
        categories?.map((item, index) => (
          <tr className='text-center' key={index}>
            <td className='font-normal border-r py-1 px-1'>{item.name}</td>

            <td className='font-normal border-r py-1 px-1'>{item.id}</td>

            <td className='font-normal border-r py-1 px-1 '>{item.quantity}</td>

            <td className='font-normal py-1 px-1 '>
              <NumberFormat
                value={item.sum}
                displayType={"text"}
                thousandSeparator={true}
                suffix=' VND'
              />
            </td>
          </tr>
        ))}
    </table>
  );
};

export default TableStatistic;
