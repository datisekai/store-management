import React from "react";
import NumberFormat from "react-number-format";
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
];

const TableStatistic = () => {
  return (
    <table className='w-full relative'>
      <tr className='rounded-[30px]'>
        <th className='font-medium py-2 border-r'>Tên loại</th>
        <th className='font-medium py-2 border-r'>ID loại</th>
        <th className='font-medium py-2 border-r'>Số lượng nhập</th>
        <th className='font-medium py-2 border-r'>Số lượng xuất</th>
        <th className='font-medium py-2 border-r'>Tổng doanh thu</th>
      </tr>

      {statistics.map((item, index) => (
        <tr className='text-center' key={index}>
          <td className='font-normal border-r py-1 px-1'>{item.name}</td>

          <td className='font-normal border-r py-1 px-1'>{item._id}</td>
          <td className='font-normal border-r py-1 px-1 '>
            {item.quantityImport}
          </td>
          <td className='font-normal border-r py-1 px-1 '>
            {item.quantityExport}
          </td>
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
