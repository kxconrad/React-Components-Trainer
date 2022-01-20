import './App.css';
import React from 'react';
import { Outlet } from "react-router-dom";
import menuConfig from '../data/menuConfig';
import Nav from './general/nav/Nav';
import Details from './general/nav/Details';


class App extends React.Component {

    state = {
        selectedNav: menuConfig.navItems[0].value,
        navDetails: menuConfig.navItems[0].details,
        navDisplayedHeader: menuConfig.navItems[0].text
    };

    updateNav = (nav) => {
        menuConfig.navItems.forEach(element => {
            if (element.value == nav) {
                this.setState({ selectedNav: nav, navDetails: element.details, navDisplayedHeader: element.text });
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <Nav selectedNav={this.state.selectedNav} updateNav={this.updateNav} navItems={menuConfig.navItems} />
                <Details navElement={this.state} />
                <Outlet />
            </React.Fragment>
        );

    }
};


export default App;