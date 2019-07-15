import React from 'react';
import {Animal} from "./animal/Animal";
import {useCount} from "../states/CountContext";
import {usePreference} from "../states/PreferenceContext";

export const Animals = () => {
    const { count } = useCount();
    const { preference } = usePreference();

    return (
        <div className="card animals-container">
            <div className="row">
                {count > 0 ? (
                    [...Array(count)].map((_, number) => (
                        <Animal key={number} number={number} preference={preference} />
                    ))
                ): (
                    <div className="col">Nothing to display :'( increment to show {preference}!</div>
                )}
            </div>
        </div>
    );
};

export default Animals;
