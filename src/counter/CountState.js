import React from "react";

export const CountContext = React.createContext({
  count: 0,
  increment: () => {},
  decrement: () => {}
});

export const CountState = ({ initialCount, children }) => {
  const [count, setCount] = React.useState(initialCount || 0);

  const contextValue = {
    count,
    increment: () => setCount(count + 1),
    decrement: () => setCount(count - 1)
  };

  return (
    <CountContext.Provider value={contextValue}>
      {typeof children === "function" ? children(contextValue) : children}
    </CountContext.Provider>
  );
};
