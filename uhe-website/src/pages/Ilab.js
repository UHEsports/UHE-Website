import * as React from 'react';
import logo from "../logo.svg";
import Button from "@mui/material/Button";

function Ilab() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <Button variant="contained" className="changeColor">Hello World</Button>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    );
}

export default Ilab;