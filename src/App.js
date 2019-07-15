import Counter from "./counter/Counter.container";
import React from "react";
import Animals from "./animals/Animals";
import Appbar from "./appbar/Appbar";
import {PreferenceProvider} from "./states/PreferenceContext";
import {CountProvider} from "./states/CountContext";

export const App = () => (
    <CountProvider>
        <PreferenceProvider>
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
        </PreferenceProvider>
    </CountProvider>
);

export default App;
