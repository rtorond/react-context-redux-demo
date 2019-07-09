import Counter from "./counter";
import React, {useState, useEffect} from "react";
import Animals from "./animals";
import Appbar from "./appbar";

export const CATS = 'cats';
export const DOGS = 'dogs';

export const App = () => {
    return (
        <div className="counter-app">

            <Appbar/>

            <div className="main-content">
                <div className="row">
                    <div className="col m3">

                        <Counter/>

                    </div>
                    <div className="col m9">

                        {/*<Animals count={count} />*/}

                    </div>
                </div>
            </div>
        </div>
    );
};
