import './App.css';
import React from 'react';
import { Outlet } from "react-router-dom";
import Nav from './general/nav/Nav';
import Details from './general/nav/Details';


const App = () => {

    return (
        <div className="d-flex flex-column general-wrapper">
            <Nav />
            <Details />
            <Outlet />
        </div>
    );
};


export default App;