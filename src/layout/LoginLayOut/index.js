import React from "react";
import HeaderLogin from "../components/HeaderLogin";

const LoginLayOut = ({ children }) => {
  return (
    <div>
      <HeaderLogin />
      <div
        className='min-h-screen relative'
        style={{ backgroundImage: `url(./images/bg-login.png)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default LoginLayOut;
