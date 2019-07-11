import {PreferenceProvider} from "./states/PreferenceContext";
import {CountProvider} from "./states/CountContext";
import {App} from "./App";
import React from "react";

const AppContainer = () => (
    <CountProvider>
        <PreferenceProvider>
            <App/>
        </PreferenceProvider>
    </CountProvider>
);

export default AppContainer;
