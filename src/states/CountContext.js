import React, { useState, useContext } from "react";

export const CountContext = React.createContext({
    count: 0,
    increment: () => {},
    decrement: () => {}
});

export const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <CountContext.Provider value={{ count, increment, decrement }}>
            {children}
        </CountContext.Provider>
    );
};

export const useCount = () => useContext(CountContext);
