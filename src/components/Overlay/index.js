import React from "react";
import { useDispatch } from "react-redux";
import { setDisplay } from "../../redux/SideBarReducer";

const Overlay = ({ className }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`fixed inset-0 bg-[rgba(0,0,0,0.8)] ${className} z-40`}
      onClick={() => dispatch(setDisplay({ display: false }))}
    ></div>
  );
};

export default Overlay;
