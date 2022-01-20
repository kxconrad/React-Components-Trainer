import React from 'react';
import { Link } from "react-router-dom";

class Nav extends React.Component {


    activeMenuItem = (element) => {
        let clickedNav = element.currentTarget.dataset.value;
        this.props.updateNav(clickedNav);

    }

    render() {

        const selectedNav = this.props.selectedNav;
        const navItems = this.props.navItems;

        const elements = navItems.map((element, key) => {

            let generalClasses = element.value == selectedNav ? 'me-active' : '';

            return <Link to={element.value == 'homepage' ? '/' : element.value} key={key} className={`nav-link ${generalClasses}`} data-value={element.value} onClick={this.activeMenuItem}>
                {element.text}
            </Link>;

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