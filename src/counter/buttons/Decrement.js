import React from "react";
import {connect} from "react-redux";
import {decrement} from "../../store/count/actions";

export default connect(null, {decrement})(
    ({decrement}) => (
        <button onClick={decrement} className="btn-floating btn-large waves-effect waves-light red">
            <i className="material-icons left">remove</i>
        </button>
    )
);
