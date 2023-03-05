import React, { useState } from "react";
import "./AccordionItem.scss";

function AccordionItem({ title, body, id }) {
  const [isActive, setIsActive] = useState(false);

  function handleActivity() {
    setIsActive(!isActive);
  }

  return (
    <div key={id} className="accordion">
      <h2 className="accordion-title" onClick={handleActivity}>
        {title}
        <div>{isActive ? "▴" : "▼"}</div>
      </h2>
      {isActive && <p className="accordion-content">{body}</p>}
    </div>
  );
}

export default AccordionItem;
