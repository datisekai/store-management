import React from "react";

const Title = ({ title }) => {
  document.title = title || "DStore | Store Management";
  return <></>;
};

export default Title;
