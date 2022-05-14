import React, { useState } from "react";

const Header = () => {
  const [userMenu, setUserMenu] = useState(false);
  return (
    <header className='bg-white shadowBottom'>
      <div className='widthHeader flex items-center justify-between text-blue-color h-[70px]'>
        <i className='text-xl fa-solid fa-bars'></i>
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
