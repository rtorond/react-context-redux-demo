import React from 'react';
import {Animal} from "./animal/Animal";

export const Animals = ({count, preference }) => (
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
