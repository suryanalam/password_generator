import React from "react";

const Button = ({ customClass, onClickFun, text }) => {
  return (
    <button className={customClass} onClick={onClickFun}>
      {text}
    </button>
  );
};

export default Button;
