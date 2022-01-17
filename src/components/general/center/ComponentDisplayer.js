import React from 'react';
import Wikipedia from '../../wikipedia/Wikipedia';
import Youtube from '../../youtube/Youtube';
import OutsideRequester from '../../outsideRequester/OutsideRequester';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    padding: 15px;
    min-height: 300px;
    & .search-input{
        max-width: 350px;
    }
`;

class ComponentDisplayer extends React.Component {


    render() {
        const { selectedNav, globalConfig } = this.props;
        return (
            <StyledWrapper className="component-displayer bg-light mt-4">
                {selectedNav === globalConfig.MENU_WIKIPEDIA ? <Wikipedia /> : ''}
                {selectedNav === globalConfig.MENU_YOUTUBE ? <Youtube /> : ''}
                {selectedNav === globalConfig.MENU_OUTSIDE_REQUESTER ? <OutsideRequester /> : ''}
            </StyledWrapper>
        );
    }
};


export default ComponentDisplayer;