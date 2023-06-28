import React from "react";

const Select = (props) => {
  return (
    <div className="home">
      <h1>Should you use a dropdown?</h1>
      {/* Button with mouse enter event listener */}
      <button onMouseEnter={props.handleMouse}>
        <div className="dropBox">
          <span>Select</span>
        </div>{" "}
        {/* Conditional rendering of chevron icon based on Status prop */}
        <i
          className={props.Status ? "fas fa-chevron-down" : "fas fa-chevron-up"}
        ></i>
      </button>
    </div>
  );
};

export default Select;
