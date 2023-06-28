import React, { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import Select from "./Select";

const App = () => {
  const [Status, setStatus] = useState(false); // State variable to track the status of the dropdown
  const [selected, setSelected] = useState("Not Selected"); // State variable to store the selected option
  const options = ["Yes", "Probably Not"]; // Array of dropdown options
  const rootRef = useRef(null); // Reference to the root element of the component

  useEffect(() => {
    const rootNode = rootRef.current;

    // Function to handle mouse leave event from the root element
    const handleMouseLeave = () => {
      setStatus(false);
    };

    // Adding event listener for mouse leave event on the root element
    rootNode.addEventListener("mouseleave", handleMouseLeave);

    // Cleaningup the event listener on component unmount
    return () => {
      // Use the copied variable in the cleanup function
      const cleanupNode = rootNode;
      cleanupNode.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Function to handle mouse enter event when hovering over the button
  const handleMouse = () => {
    setStatus(true);
  };

  // Function to handle click event when an option in the dropdown list is selected
  const handleOnClick = (option) => {
    setStatus(false);
    setSelected(option);
  };

  return (
    <div className="app" ref={rootRef}>
      {/* Rendering the Select component */}
      <Select Status={Status} handleMouse={handleMouse} />

      {/* Rendering the Dropdown component if Status is true */}
      {Status && <Dropdown options={options} handleOnClick={handleOnClick} />}

      {/* Displaying the selected item */}
      <p className="ans-p">Status: {selected}</p>
    </div>
  );
};

export default App;
