import React, { useEffect } from "react";
import { scrollTop } from "../../utils/ScrollTop";

const Staff = () => {
  useEffect(() => {
    scrollTop();
  }, []);
  return <div>Staff</div>;
};

export default Staff;
