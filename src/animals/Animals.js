import React from 'react';
import {Animal} from "./animal/Animal";

const Animals = ({count}) => (
    <div className="card animals-container">
        <div className="row">
            {count > 0 ? (
                [...Array(count)].map((_, number) => (
                    <Animal key={number} number={number}/>
                ))
            ) : (
                <div className="col">Nothing to display :'( increment to show cats!</div>
            )}
        </div>
    </div>
);

export default Animals;
