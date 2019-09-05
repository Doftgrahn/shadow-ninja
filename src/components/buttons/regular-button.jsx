import React from "react";

const RegularButton = ({click, title}) => (
  <button className="btn-regular" onClick={click}>
    {title}
  </button>
);

export default RegularButton;
    
