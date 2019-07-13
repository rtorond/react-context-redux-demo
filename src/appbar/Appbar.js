import React from "react";
import {connect} from "react-redux";
import {other} from "../store";

export const Appbar = ({otherPreference, togglePreference}) => (
    <nav>
        <div className="nav-wrapper">
            <span className="brand-logo">Funny animals counter</span>
            <ul className="right">
                <li>
                    <button className="waves-effect waves-light btn" onClick={togglePreference}>
                        I love {otherPreference} <span role="img" aria-label="cat">🐱</span> ❤!
                    </button>
                </li>
            </ul>
        </div>
    </nav>
);

const connector = connect(
    (state) => {
        return {
            otherPreference: other(state.preference)
        };
    },
    (dispatch) => {
        return {
            togglePreference: () => dispatch({
                type: 'TOGGLE_PREFERENCE'
            }),
        };
    }
);

const ConnectedAppbar = connector(Appbar);

export default ConnectedAppbar;
