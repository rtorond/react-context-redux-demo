import React from "react";

export const Appbar = ({ togglePreference }) => (
    <nav>
        <div className="nav-wrapper">
            <a href="#" className="brand-logo">Funny animals counter</a>
            <ul className="right">
                <li>
                    <a className="waves-effect waves-light btn" onClick={togglePreference}>
                        I love Cats 🐱 ❤!
                    </a>
                </li>
                <li>
                    <a className="waves-effect waves-light btn" onClick={togglePreference}>
                        I love Dogs 🐶 ❤ !
                    </a>
                </li>
            </ul>
        </div>
    </nav>
);
