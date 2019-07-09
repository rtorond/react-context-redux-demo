import React from "react";

export const Animal = ({preference, number}) => (
    <div className="col md-4 s-6 animal-item">
        <div id={`${preference}_${number % 10}`} className="animal-img"/>
    </div>
);
