import React, { useContext } from "react";
import { CountContext } from "../CountState";

export default () => {
  const { increment } = useContext(CountContext);
  return <button onClick={increment}>increment</button>;
};
