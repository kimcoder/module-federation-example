import React from "react";

const Tabs = (props) => {
  return (
    <div
      {...props}
      style={{
        display: "flex",
        maxWidth: "100vw",
        padding: "0 10vw 0",
        justifyContent: "space-between",
      }}
    >
      {props.children}
    </div>
  );
};

export default Tabs;
