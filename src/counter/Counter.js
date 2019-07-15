import IncrementButton from "./buttons/Increment.container";
import DecrementButton from "./buttons/Decrement.container";
import React from "react";

const Counter = ({count}) => (
    <div className="card counter">
        <div className="card-content count">

            Count = {count}

        </div>
        <div className="card-action">

            <div className="row">
                <div className="col s6">
                    <IncrementButton/>
                </div>
                <div className="col s6">
                    <DecrementButton/>
                </div>
            </div>

        </div>
    </div>
);

export default Counter;
