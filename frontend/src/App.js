import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Navigation} from "./components/Navbar";

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>
    )
}

export default App;
