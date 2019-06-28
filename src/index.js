import React from "react";
import ReactDOM from "react-dom";
import Counter from "./counter";

const App = () => (
  <>
    <Counter />
    <Counter />
    <Counter />
  </>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
