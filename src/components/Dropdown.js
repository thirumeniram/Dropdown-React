import React from "react";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      {/* Maping through each option and rendering a paragraph element for each */}
      {props.options.map((option) => (
        <p
          key={props.options.indexOf(option)} // Using the index as the key (assuming options are unique)
          onClick={() => props.handleOnClick(option)} // Calling the handleOnClick function when clicked on an option
        >
          {option} {/* Displaying the option text */}
        </p>
      ))}
    </div>
  );
};

export default Dropdown;

