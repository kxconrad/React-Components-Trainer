import React from 'react';
import styled, { css } from 'styled-components'


const StyledButton = styled.button`
    &:focus,
    &:active{
        box-shadow: none !important;
    }
`;


const Button = ({ text, actionHandler }) => {

    return (
        <StyledButton className="btn btn-outline-primary" onClick={actionHandler}> {text} </StyledButton >
    );

};


export default Button;