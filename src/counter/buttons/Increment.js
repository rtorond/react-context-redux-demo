import React from "react";
import {useCountState} from "../../states/CountContext";

export default () => {
    const {increment} = useCountState();

    return (
        <button onClick={increment} className="btn-floating btn-large waves-effect waves-light blue">
            <i className="material-icons left">add</i>
        </button>
    );
}
