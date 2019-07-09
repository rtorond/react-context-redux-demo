import IncrementButton from "./buttons/Increment";
import DecrementButton from "./buttons/Decrement";
import React from "react";
import {connect} from "react-redux";

const Counter = ({ count, increment, decrement }) => (
    <div className="card counter">
        <div className="card-content count">

            Count = {count}

        </div>
        <div className="card-action">

            <div className="row">
                <div className="col s6">
                    <IncrementButton increment={increment}/>
                </div>
                <div className="col s6">
                    <DecrementButton decrement={decrement}/>
                </div>
            </div>

        </div>
    </div>
);

const connector = connect(
    (state) => {
        return {
            count: state.count
        };
    },
    (dispatch) => {
        return {
            increment: () => dispatch({
                type: 'INCREMENT'
            }),
            decrement: () => dispatch({
                type: 'DECREMENT'
            })
        };
    }
);

const ConnectedCounter = connector(Counter);

export default ConnectedCounter;
