import Counter from "./counter/Counter";
import React, {useState} from "react";
import Animals from "./animals/Animals";
import Appbar from "./appbar/Appbar";

import { CountState } from './states/CountState';

export const CATS = 'cats';
export const DOGS = 'dogs';

export const App = () => {
    const [count, setCount] = useState(0);
    const [preference, setPreference] = useState(CATS);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    const togglePreference = () => setPreference(preference === CATS ? DOGS : CATS);

    return (
        <div className="counter-app">

            <Appbar preference={preference} togglePreference={togglePreference}/>

            <div className="main-content">
                <div className="row">
                    <div className="col m3 ">

                        <Counter
                            count={count}
                            increment={increment}
                            decrement={decrement}
                        />

                    </div>
                    <div className="col m9">

                        {/*<Animals count={count} preference={preference}/>*/}

                    </div>
                </div>
            </div>
        </div>
    );
};
