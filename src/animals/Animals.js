import React from 'react';
import {Animal} from "./animal/Animal";
import {useSelector} from "../states/GlobalState";

export const Animals = () => {
    const { getCount, getPreference } = useSelector();
    const count = getCount();
    const preference = getPreference();

    return (
        <div className="card animals-container">
            <div className="row">
                {getCount() > 0 ? (
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
