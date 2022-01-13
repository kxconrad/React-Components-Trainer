import React from 'react';
import LeftSide from './content/LeftSide';
import CenterSide from './content/CenterSide';
import RightSide from './content/RightSide';

class TopBar extends React.Component {

    render() {

        return (
            <nav className="navbar navbar-light bg-light border border-secondary">
                <div className="container-fluid">
                    <LeftSide />
                    <CenterSide responseDataListReady={this.props.responseDataListReady} />
                    <RightSide />
                </div>
            </nav>
        );
    }
};


export default TopBar;