import { useState } from "react";
import "./Collapse.scss";

export function Collapse({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const display = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="collapse">
      <div className="collapse__dropdown__title">
        <h2>{title}</h2>
        <p onClick={display}>
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </p>
      </div>
      <div className="collapse__dropdown__content">
        {isOpen && <div>{children}</div>}
      </div>
    </header>
  );
}
