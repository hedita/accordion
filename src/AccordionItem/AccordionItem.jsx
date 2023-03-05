import React, { useState } from "react";
import "./AccordionItem.scss";

function AccordionItem({ title, body, id }) {
  const [isActive, setIsActive] = useState(false);

  function handleActivity() {
    setIsActive(!isActive);
  }

  return (
    <div key={id} className="accordion">
      <div className="accordion-title" onClick={handleActivity}>
        {title}
        <div>{isActive ? "▴" : "▼"}</div>
      </div>
      {isActive && <div className="accordion-content">{body}</div>}
    </div>
  );
}

export default AccordionItem;
