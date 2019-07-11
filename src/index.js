import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {GlobalStateProvider} from "./states/GlobalState";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <GlobalStateProvider>
        <App/>
    </GlobalStateProvider>,
    rootElement
);
