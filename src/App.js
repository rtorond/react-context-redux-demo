import Counter from "./counter/Counter";
import React, {useState} from "react";
import Animals from "./animals/Animals";
import Appbar from "./appbar/Appbar";

import {CountProvider} from './states/CountContext';

export const CATS = 'cats';
export const DOGS = 'dogs';

export const App = () => {
    const [preference, setPreference] = useState(CATS);

    const togglePreference = () => setPreference(preference === CATS ? DOGS : CATS);

    return (
        <div className="counter-app">

            <Appbar preference={preference} togglePreference={togglePreference}/>

            <CountProvider>
                <div className="main-content">
                    <div className="row">
                        <div className="col m3 ">

                            <Counter/>

                        </div>
                        <div className="col m9">

                            <Animals preference={preference}/>

                        </div>
                    </div>
                </div>
            </CountProvider>
        </div>
    );
};
