import React from "react";
import ItemSideBar from "../../../components/ItemSideBar";

const categories = [
  {
    route: "/",
    icon: "fa-solid fa-house",
    name: "Dashboard",
  },
  {
    route: "/category",
    icon: "fa-solid fa-clipboard-list",
    name: "Category",
  },
  {
    route: "/product",
    icon: "fa-solid fa-bag-shopping",
    name: "Product",
  },
  {
    route: "/staff",
    icon: "fa-solid fa-person-burst",
    name: "Staff",
  },
  {
    route: "/statistic",
    icon: "fa-solid fa-ranking-star",
    name: "Statistic",
  },
];

const Sidebar = () => {
  return (
    <div className='shadowRight pt-3 pb-4 z-50'>
      <h2 className='text-blue-color text-2xl text-center mt-2 px-3'>DStore</h2>
      <div className='mt-5'>
        {categories.map((category, index) => (
          <ItemSideBar key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
