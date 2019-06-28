import React, { useContext } from "react";
import { CountContext } from "../CountState";

export default () => {
  const { decrement } = useContext(CountContext);
  return <button onClick={decrement}>decrement</button>;
};
