import React from "react";
import {useDispatch} from "../../states/GlobalState";

export default () => {
    const dispatch = useDispatch();
    const decrement = () => dispatch({type: 'DECREMENT'});

    return (
        <button
            onClick={decrement}
            className="btn-floating btn-large waves-effect waves-light red"
        >
            <i className="material-icons left">remove</i>
        </button>
    );
}
