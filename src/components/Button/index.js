import React from "react";

const Button = ({ className, label, onSubmit, disable }) => {
  return (
    <button
      type='submit'
      className={`py-3 px-5 transition-all rounded-lg ${className} w-full`}
      onClick={onSubmit}
      disabled={disable}
    >
      {label || ""}
    </button>
  );
};

export default Button;
