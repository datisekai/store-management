import React from "react";

const Button = ({ className, label, onSubmit }) => {
  return (
    <button
      className={`py-3 px-5 transition-all rounded-lg ${className} w-full`}
      onClick={onSubmit}
    >
      {label || ""}
    </button>
  );
};

export default Button;
