import React from "react";

const Checkbox = ({status,title, onChangeFun}) => {
  return (
    <div className="checkbox-div">
      <input type="checkbox" checked={status} onChange={onChangeFun}/>
      <label>{title}</label>
    </div>
  );
};

export default Checkbox;
