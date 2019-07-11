import {useCount} from "../states/CountContext";
import Counter from "./Counter";
import React from "react";

const CounterContainer = () => {
    const {count} = useCount();

    return (
        <Counter count={count}/>
    )
};

export default CounterContainer;
