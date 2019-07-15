import React from "react";

export const Appbar = ({isDogLover, togglePreference}) => (
    <nav>
        <div className="nav-wrapper">
            <span className="brand-logo">Funny animals counter</span>
            <ul className="right">
                {
                    isDogLover ? (
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

export default Appbar;
