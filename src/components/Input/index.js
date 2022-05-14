import React from "react";

const Input = ({ data }) => {
  return (
    <>
      <input
        type={data.type || "text"}
        placeholder={data.label || ""}
        onChange={data.onChange}
        onBlur={data.onBlur}
        value={data.value}
        name={data.name}
        className={
          "bg-input-color rounded-md py-3 px-5 mt-3 block w-full outline-blue-color"
        }
      />
      {data.error && data.touched && (
        <p className='text-red-400 py-1 text-sm'>{data.error}</p>
      )}
    </>
  );
};

export default Input;
