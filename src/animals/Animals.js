import React from 'react';
import {Animal} from "./animal/Animal";

export const Animals = ({count}) => (
    <div className="card animals-container">
        <div className="row">
            {count > 0 ? (
                [...Array(count)].map((_, number) => (
                    <Animal number={number}/>
                ))
            ) : (
                <div className="col">Nothing to display :'(</div>
            )}
        </div>
    </div>
);
