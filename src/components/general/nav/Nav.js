import React from 'react';

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
            let additionalClasses = element.value == selectedNav ? 'text-primary' : '';

            return <li key={key} className={`nav-item ${generalClasses}`} data-value={element.value} onClick={this.activeMenuItem}>
                <a className={`nav-link ${additionalClasses}`} aria-current="page" href="#">{element.text}</a>
            </li>;

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