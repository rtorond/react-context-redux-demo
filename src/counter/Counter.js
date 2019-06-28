import IncrementButton from "./buttons/Increment";
import DecrementButton from "./buttons/Decrement";
import { CountState } from "./CountState";
import React from "react";

export default () => (
  <CountState>
    {({ count }) => (
      <div className="App">
        <div>Count : {count}</div>
        <IncrementButton />
        <DecrementButton />
      </div>
    )}
  </CountState>
);
