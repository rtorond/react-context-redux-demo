import React from "react";
import {DOGS} from "../App";

export const Appbar = ({preference, togglePreference}) => (
    <nav>
        <div className="nav-wrapper">
            <a href="#" className="brand-logo">Funny animals counter</a>
            <ul className="right">
                {
                    preference === DOGS ? (
                        <li>
                            <a className="waves-effect waves-light btn" onClick={togglePreference}>
                                I love Cats 🐱 ❤!
                            </a>
                        </li>
                    ) : (
                        <li>
                            <a className="waves-effect waves-light btn" onClick={togglePreference}>
                                I love Dogs 🐶 ❤ !
                            </a>
                        </li>
                    )
                }
            </ul>
        </div>
    </nav>
);
