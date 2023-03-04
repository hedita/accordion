import React, { useState,useEffect } from "react";
import "./scss/index.scss";

function Accordion() {
  const [isActive, setIsActive] = useState(false);
  const [title , setTitle] = useState("");
  const [body , setBody] = useState("");


  useEffect (() => {
    requestAccordion();
  });

  async function requestAccordion () {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const [{title, body}] = await result.json();

    setTitle(title)
    setBody(body)
  }

  return (
    <>
      <h1 className="main-title">How can we help you?</h1>
      <div className="accordion">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          {title}
          <div>{isActive ? "▴" : "▼"}</div>
        </div>
        {isActive && <div className="accordion-content">{body}</div>}
        <hr />
      </div>
    </>
  );
}

export default Accordion;
