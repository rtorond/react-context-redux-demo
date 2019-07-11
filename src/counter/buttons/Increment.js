import React from "react";
import {useDispatch} from "../../states/GlobalState";

export default () => {
    const dispatch = useDispatch();
    const increment = () => dispatch({type: 'INCREMENT'});

    return (
        <button
            onClick={increment}
            className="btn-floating btn-large waves-effect waves-light blue"
        >
            <i className="material-icons left">add</i>
        </button>
    );
}
