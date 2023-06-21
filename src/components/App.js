import React, { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import Select from "./Select";

const App = () => {
  const [isShow, setIsShow] = useState(false);
  const [selected, setSelected] = useState("Not Selected");
  const items = ["Yes", "Probably Not"];
  const rootRef = useRef(null);

  useEffect(() => {
    const rootNode = rootRef.current;

    // Function to handle mouse leave event from the root element
    const handleMouseLeave = () => {
      setIsShow(false);
    };

    // Add event listener for mouse leave event on the root element
    rootNode.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup the event listener on component unmount
    return () => {
      // Use the copied variable in the cleanup function
      const cleanupNode = rootNode;
      cleanupNode.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Function to handle mouse enter event when hovering over the button
  const handleMouseEnter = () => {
    setIsShow(true);
  };

  // Function to handle click event when an option in the dropdown list is selected
  const handleOnClick = (item) => {
    setIsShow(false);
    setSelected(item);
  };

  return (
    <div className="app" ref={rootRef}>
      {/* Render the Select component */}
      <Select isShow={isShow} handleMouseEnter={handleMouseEnter} />

      {/* Render the Dropdown component if isShow is true */}
      {isShow && <Dropdown items={items} handleOnClick={handleOnClick} />}

      {/* Display the selected item */}
      <p className="ans-p">Status: {selected}</p>
    </div>
  );
};

export default App;
