import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./App";
import {BrowserRouter, Router} from "react-router-dom";
import { Provider } from "./components/Context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <React.StrictMode>
    <Provider> 
    <App/>
    </Provider>
    </React.StrictMode>
    </BrowserRouter>
);