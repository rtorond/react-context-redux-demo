import React from "react";
import {useCount} from "../../states/CountContext";

export default () => {
    const {increment} = useCount();

    return (
        <button onClick={increment} className="btn-floating btn-large waves-effect waves-light blue">
            <i className="material-icons left">add</i>
        </button>
    );
}
