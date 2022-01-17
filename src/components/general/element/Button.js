import React from 'react';
import styled, { css } from 'styled-components'


const StyledButton = styled.button`
    height: 38px;
    min-width: 73px;
    &:focus,
    &:active{
        box-shadow: none !important;
    }
    &:hover{
        background-color: orange;
        border: orange;
    }
`;


const Button = ({ text, actionHandler }) => {

    return (
        <StyledButton className="btn btn-outline-primary" onClick={actionHandler}> {text} </StyledButton >
    );

};


export default Button;