import React from "react";
import {useCountState} from "../../states/CountContext";

export default () => {
    const {decrement} = useCountState();

    return (
        <button onClick={decrement} className="btn-floating btn-large waves-effect waves-light red">
            <i className="material-icons left">remove</i>
        </button>
    );
}
