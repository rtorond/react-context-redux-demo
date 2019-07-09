import React from "react";
import {connect} from "react-redux";
import {DOGS} from "../store";

export const Appbar = ({preference, togglePreference}) => (
    <nav>
        <div className="nav-wrapper">
            <span className="brand-logo">Funny animals counter</span>
            <ul className="right">
                {
                    preference === DOGS ? (
                        <li>
                            <button className="waves-effect waves-light btn" onClick={togglePreference}>
                                I love Cats <span role="img" aria-label="cat">🐱</span> ❤!
                            </button>
                        </li>
                    ) : (
                        <li>
                            <button className="waves-effect waves-light btn" onClick={togglePreference}>
                                I love Dogs <span role="img" aria-label="dog">🐶</span> ❤ !
                            </button>
                        </li>
                    )
                }
            </ul>
        </div>
    </nav>
);


const connector = connect(
    (state) => {
        return {
            preference: state.preference
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
