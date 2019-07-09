import React from "react";

export const Animal = ({number}) => (
    <div className="col md-4 s-6 animal-item">
        <div id={`cats_${number % 10}`} className="animal-img"/>
    </div>
);
