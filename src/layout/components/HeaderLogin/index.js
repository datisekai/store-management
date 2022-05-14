import React from "react";
import { Link } from "react-router-dom";

const HeaderLogin = () => {
  return (
    <div className='bg-white h-[60px] shadowBottom widthHeader flex items-center justify-between'>
      <div className='flex items-center'>
        <h3 className='text-blue-color text-2xl'>DStore</h3>
        <a href={"https://github.com/datisekai"} target={"_blank"}>
          {" "}
          <i className='ml-4 text-3xl cursor-pointer fa-brands fa-github'></i>
        </a>
      </div>

      <a href={"https://www.facebook.com/datisekai/"} target={"_blank"}>
        <button className='border border-blue-color px-5 py-1 rounded-md text-blue-color hover:bg-blue-color transition-all hover:text-white'>
          Liên hệ
        </button>
      </a>
    </div>
  );
};

export default HeaderLogin;
