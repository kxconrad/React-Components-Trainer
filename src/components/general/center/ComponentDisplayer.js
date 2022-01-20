import React from 'react';
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
            hellow
            </StyledWrapper>
        );
    }
};


export default ComponentDisplayer;