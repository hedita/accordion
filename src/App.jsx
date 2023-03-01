import ReactDOM from "react-dom/client";
import Accordion from "./Accordion";

const App = () => {
  return (
    <Accordion />
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);