import { useState, useEffect, Fragment } from "react";
import AccordionItem from "../AccordionItem/AccordionItem";
import "./Accordion.scss";

const Accordion = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    requestAccordion();
  });

  async function requestAccordion() {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const resultJson = await result.json();
    setData(resultJson);
  }
  return (
    <>
      <h1 className="main-title">How can we help you?</h1>
      {data.map(({ title, body, id }) => {
        return (
          <Fragment key={id}>
            <AccordionItem title={title} body={body} id={id} />
          </Fragment>
        );
      })}
    </>
  );
};

export default Accordion;
