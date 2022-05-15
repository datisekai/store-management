import React from "react";
import { useSelector } from "react-redux";
import ItemSideBar from "../../../components/ItemSideBar";
import Overlay from "../../../components/Overlay";

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
  const { text, display } = useSelector((state) => state.sidebar);
  return (
    <div className=''>
      {" "}
      <div
        className={`${
          display ? "block" : "hidden"
        } md:block fixed bg-white top-0 bottom-0 shadowRight pt-3 pb-4 z-50 ${
          text ? "w-[150px]" : "w-[70px]"
        }`}
      >
        <h2 className='text-blue-color text-2xl text-center mt-2 px-3'>
          {text ? "DStore" : "DS"}
        </h2>
        <div className='mt-5'>
          {categories.map((category, index) => (
            <ItemSideBar key={index} category={category} />
          ))}
        </div>
      </div>
      <Overlay className={`${display ? "block" : "hidden"}`} />
    </div>
  );
};

export default Sidebar;
