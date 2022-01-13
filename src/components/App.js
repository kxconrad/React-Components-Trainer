import './App.css';
import React from 'react';
import Nav from './general/nav/Nav';
import Details from './general/nav/Details';
import ComponentDisplayer from './general/center/ComponentDisplayer';


class App extends React.Component {

    globalConfig = {
        navItems: [
            {
                value: 'wikipedia',
                text: 'Wikipedia'
            },
            {
                value: 'youtube',
                text: 'Youtube'
            },
            {
                value: 'outside_requester',
                text: 'Outside API Requester'
            }
        ],
        MENU_WIKIPEDIA: 'wikipedia',
        MENU_YOUTUBE: 'youtube',
        MENU_OUTSIDE_REQUESTER: 'outside_requester'
    }

    state = {
        selectedNav: 'wikipedia'
    };

    updateNav = (nav) => {
        this.setState({ selectedNav: nav });
    }

    render() {
        return (
            <React.Fragment>
                <Nav selectedNav={this.state.selectedNav} updateNav={this.updateNav} navItems={this.globalConfig.navItems} />
                <Details />
                <ComponentDisplayer selectedNav={this.state.selectedNav} globalConfig={this.globalConfig} />
            </React.Fragment>
        );

    }
};


export default App;