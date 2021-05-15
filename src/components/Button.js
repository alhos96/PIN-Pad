import React from "react";

const Button = (props) => {
  const { className, value } = props.button;

  return <input type="button" className={className} value={value} />;
};

export default Button;
