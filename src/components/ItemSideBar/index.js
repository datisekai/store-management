import React from "react";
import { NavLink } from "react-router-dom";

const ItemSideBar = ({ category }) => {
  return (
    <div className='flex items-center py-[10px] cursor-pointer hover:bg-main-color px-3 transition-all'>
      <NavLink
        to={category.route}
        activeclassname='active'
        className={
          "w-[35px] h-[35px] rounded-full text-blue-color border border-blue-color hover:text-white cursor-pointer hover:bg-blue-color transition-all flex items-center justify-center"
        }
      >
        <i className={category.icon}></i>
      </NavLink>
      <p className='text-blue-color pl-[10px]'>{category.name}</p>
    </div>
  );
};

export default ItemSideBar;
