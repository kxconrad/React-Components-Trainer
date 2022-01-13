import React from 'react';
import Wikipedia from '../../wikipedia/Wikipedia';
import Youtube from '../../youtube/Youtube';
import OutsideRequester from '../../outsideRequester/OutsideRequester';


class ComponentDisplayer extends React.Component {


    render() {
        const { selectedNav, globalConfig } = this.props;
        return (
            <div className="component-displayer bg-light mt-4">
                {selectedNav === globalConfig.MENU_WIKIPEDIA ? <Wikipedia /> : ''}
                {selectedNav === globalConfig.MENU_YOUTUBE ? <Youtube /> : ''}
                {selectedNav === globalConfig.MENU_OUTSIDE_REQUESTER ? <OutsideRequester /> : ''}
            </div>
        );
    }
};


export default ComponentDisplayer;