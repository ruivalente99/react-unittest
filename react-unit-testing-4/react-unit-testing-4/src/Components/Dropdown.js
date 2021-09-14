import { React, useState } from "react";

function Dropdown({ options, title, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelection = (option) => {
    onSelect(option);
    setIsOpen(false);
  };
  return (
    <div>
      <button role="button" onClick={() => setIsOpen(true)}>{title}</button>
      <div>
      {isOpen && (
        <ul role="menu">
          {options.map((option) => (
            <li key={option} role="menuitem" onClick={()=>handleSelection(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>
  );
}

export default Dropdown;
