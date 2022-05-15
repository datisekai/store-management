import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisplay } from "../../../redux/SideBarReducer";

const Header = () => {
  const [userMenu, setUserMenu] = useState(false);
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state.sidebar);
  return (
    <header className='bg-white shadowBottom'>
      <div className='widthHeader flex items-center justify-between text-blue-color h-[70px]'>
        {/* PC */}
        <i
          className='hidden cursor-pointer md:block text-xl fa-solid fa-bars'
          onClick={() => dispatch(setDisplay({ text: !text }))}
        ></i>
        {/* Mobile */}
        <i
          className='block md:hidden cursor-pointer text-xl fa-solid fa-bars'
          onClick={() => dispatch(setDisplay({ display: true }))}
        ></i>
        <a href='facebook.com/datisekai' target={"_blank"} className='text-xl'>
          <i className='fa-solid fa-at'></i> Datisekai
        </a>
        <div className='relative'>
          <img
            src='https://i.pravatar.cc/50'
            onClick={() => setUserMenu(!userMenu)}
            className='rounded-full cursor-pointer'
            alt=''
          />
          {userMenu && (
            <ul className='absolute top-[62px] right-0 bg-white w-[200px] rounded-[10px] border shadowUser py-3 transition-all'>
              <li className='px-3 py-1 hover:bg-main-color hover:text-black cursor-pointer text-blue-color transition-all'>
                Đổi mật khẩu
              </li>
              <li className='px-3 py-1 hover:bg-main-color hover:text-black cursor-pointer text-blue-color transition-all'>
                Đăng xuất
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
