import React, { useState, Fragment } from "react";
import "./index.scss";

function AccordionItem({ title, body, id }) {
  const [isActive, setIsActive] = useState(false);

  function handleActivity() {
    setIsActive(!isActive);
  }

  return (
    <Fragment key={id}>
      <div className="accordion">
        <div className="accordion-title" onClick={handleActivity}>
          {title}
          <div>{isActive ? "▴" : "▼"}</div>
        </div>
        {isActive && <div className="accordion-content">{body}</div>}
        <hr />
      </div>
    </Fragment>
  );
}

export default AccordionItem;
