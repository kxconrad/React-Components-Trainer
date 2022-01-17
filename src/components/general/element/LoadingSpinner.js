import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div`
    width: 100px;
    height: 100px;
`;


const LoadingSpinner = () => {

    return (
        <StyledSpinner className="spinner-border text-warning">
            <span className="visually-hidden">Loading...</span>
        </StyledSpinner>
    );

};


export default LoadingSpinner;