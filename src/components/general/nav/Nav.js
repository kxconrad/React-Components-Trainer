import React from 'react';
import { NavLink } from "react-router-dom";
import menuConfig from '../../../data/menuConfig';

class Nav extends React.Component {

    render() {

        const elements = menuConfig.navItems.map((element, key) => {

            return <NavLink
                to={element.value}
                key={element.value}
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                data-value={element.value}>
                {element.header}
            </NavLink>;

        });

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand me-5" href="#">React Components Trainer</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {elements}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};


export default Nav;