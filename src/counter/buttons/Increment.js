import React from "react";
import {connect} from "react-redux";
import {increment} from "../../store/count/actions";

export default connect(null, {increment})(
    ({increment}) => (
        <button onClick={increment} className="btn-floating btn-large waves-effect waves-light blue">
            <i className="material-icons left">add</i>
        </button>
    )
);
