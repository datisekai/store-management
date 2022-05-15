import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

const ItemSideBar = ({ category }) => {
  const navigate = useNavigate();
  const { text } = useSelector((state) => state.sidebar);
  return (
    <div
      className={`flex items-center py-[10px] cursor-pointer hover:bg-main-color px-3 transition-all ${
        text ? "" : "justify-center"
      }`}
      onClick={() => navigate(category.route)}
    >
      <NavLink
        to={category.route}
        activeclassname='active'
        className={
          "w-[35px] h-[35px] rounded-full text-blue-color border border-blue-color hover:text-white cursor-pointer hover:bg-blue-color transition-all flex items-center justify-center"
        }
      >
        <i className={category.icon}></i>
      </NavLink>
      {text && <p className='text-blue-color pl-[10px]'>{category.name}</p>}
    </div>
  );
};

export default ItemSideBar;
