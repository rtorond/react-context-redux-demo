import Counter from "./counter/Counter";
import React from "react";
import Animals from "./animals/Animals";
import Appbar from "./appbar/Appbar";

export const App = () => (
    <div className="counter-app">

        <Appbar/>

        <div className="main-content">
            <div className="row">
                <div className="col m3 ">

                    <Counter/>

                </div>
                <div className="col m9">

                    <Animals/>

                </div>
            </div>
        </div>

    </div>
);

export default App;
