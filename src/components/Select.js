import React from "react";

const Select = (props) => {
  return (
    <div className="home">
      <h1>Should you use a dropdown?</h1>
      <button onMouseEnter={props.handleMouseEnter}>
        <div className="dropBox">
          <span>Select</span>
        </div>{" "}
        <i
          className={
            props.isShow ? "fa-solid fa-angle-down" : "fa-solid fa-angle-up"
          }
        ></i>
      </button>
    </div>
  );
};

export default Select;
