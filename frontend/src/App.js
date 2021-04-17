import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Navigation} from "./components/Navbar";

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <div>Test</div>
        </BrowserRouter>
    )
}

export default App;
