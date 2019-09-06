import React from "react";

const RegularButton = ({title, click, param}) => (
  <button className="btn-regular" onClick={() => click(param)}>
    {title}
  </button>
);

export default RegularButton;
