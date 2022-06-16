import React from "react";

const Button = (props) => {
  return (
    <button {...props} style={{ background: "red" }}>
      {props.children}
    </button>
  );
};

export default Button;
