import React, { useEffect } from "react";
import { scrollTop } from "../../utils/ScrollTop";

const Statistic = () => {
  useEffect(() => {
    scrollTop();
  }, []);
  return <div>Statistic</div>;
};

export default Statistic;
