import Counter from "./counter";
import React, {useState, useEffect} from "react";
import Animals from "./animals";
import Appbar from "./appbar";

export const CATS = 'cats';
export const DOGS = 'dogs';

export const App = () => {
    const [count, setCount] = useState(0);
    const [preference, setPreference] = useState(CATS);

    useEffect(
        () => {
            setCount(0);
        },
        [preference]
    );

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
                            setCount={setCount}
                            increment={increment}
                            decrement={decrement}
                        />

                    </div>
                    <div className="col m9">

                        <Animals count={count} preference={preference}/>

                    </div>
                </div>
            </div>
        </div>
    );
};
