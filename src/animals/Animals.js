import React from 'react';
import {Animal} from "./animal/Animal";
import {connect} from "react-redux";
import {getCount} from "../store/count/selectors";
import {getPreference} from "../store/preference/selectors";

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

const connector = connect(
    (state) => {
        return {
            count: getCount(state),
            preference: getPreference(state)
        };
    },
);

const ConnectedAnimals = connector(Animals);

export default ConnectedAnimals;
