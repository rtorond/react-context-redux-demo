import IncrementButton from "./buttons/Increment";
import DecrementButton from "./buttons/Decrement";
import React from "react";
import {useCountState} from "../states/CountContext";

const Counter = () => {
    const {count} = useCountState();

    return (
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
}

export default Counter;
