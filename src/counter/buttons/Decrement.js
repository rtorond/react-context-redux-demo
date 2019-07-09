import React from "react";

export default ({decrement}) => (
    <button onClick={decrement} className="btn-floating btn-large waves-effect waves-light red">
        <i className="material-icons left">remove</i>
    </button>
);
