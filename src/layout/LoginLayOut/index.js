import React from "react";
import HeaderLogin from "../components/HeaderLogin";
import Title from "../../utils/Title";

const LoginLayOut = ({ children }) => {
  return (
    <div>
      <HeaderLogin />
      <Title title={"Login"} />
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
