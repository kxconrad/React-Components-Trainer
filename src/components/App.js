import './App.css';
import React from 'react';
import Nav from './general/nav/Nav';
import Details from './general/nav/Details';
import ComponentDisplayer from './general/center/ComponentDisplayer';


class App extends React.Component {

    globalConfig = {
        navItems: [
            {
                value: 'homepage',
                text: 'Home',
                details: 'You are at homepage, try some of functionality in this application'
            },
            {
                value: 'wikipedia',
                text: 'Wikipedia',
                details: 'Type your requesting words and hit enter key to check some short details provided by Wikipedia API'
            },
            {
                value: 'youtube',
                text: 'Youtube',
                details: 'Search for video related to your category, then select something from list to prepare video player'
            },
            {
                value: 'outside-requester',
                text: 'Outside API Requester',
                details: 'Play a litte with 3rd API to get some shopping list'
            }
        ],
        MENU_HOMEPAGE: 'homepage',
        MENU_WIKIPEDIA: 'wikipedia',
        MENU_YOUTUBE: 'youtube',
        MENU_OUTSIDE_REQUESTER: 'outside-requester'
    }

    state = {
        selectedNav: this.globalConfig.navItems[0].value,
        navDetails: this.globalConfig.navItems[0].details,
        navDisplayedHeader: this.globalConfig.navItems[0].text
    };

    updateNav = (nav) => {
        this.globalConfig.navItems.forEach(element => {
            if (element.value == nav) {
                this.setState({ selectedNav: nav, navDetails: element.details, navDisplayedHeader: element.text });
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <Nav selectedNav={this.state.selectedNav} updateNav={this.updateNav} navItems={this.globalConfig.navItems} />
                <Details navElement={this.state} />
                <ComponentDisplayer selectedNav={this.state.selectedNav} globalConfig={this.globalConfig} />
            </React.Fragment>
        );

    }
};


export default App;