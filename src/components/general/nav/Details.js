import React, { useState, useEffect } from 'react';
import menuConfig from '../../../data/menuConfig';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavDescriptionElement = styled.div`
    max-width: 150px;
    background-color: #ffe6cc;
    border-radius: 15px;
    padding: 15px;
    font-size: 13px;
    & h5{
        font-weight: bold;
    }
    margin-left: 40px;

`;

const StyledGeneralWords = styled.div`
    min-height: 211px;
`;



const Details = () => {

    const location = useLocation();
    const [navItem, setNavItem] = useState(menuConfig.navItems[0]);

    const currentLocation = useState(location.pathname);

    useEffect(() => {

        menuConfig.navItems.forEach(element => {

            let route = "/" + element.value;
            if (route === location.pathname) {
                setNavItem(element);
            }
        });

    }, [location.pathname]);

    return (
        <StyledGeneralWords className="d-flex bg-light mt-4 p-3 justify-content-center">
            <div className="d-flex flex-column justify-content-center  text-left">
                <h1>Hello in React Components Trainer Application!</h1>
                <h5>Created for training important aspect/skills of react and additional frontend tools realated to it.</h5>
                <br />
                <br />
                <p>Please, use top nav for interacting with specific components and functionality.</p>
            </div>
            <NavDescriptionElement className="d-flex flex-column">
                <h5>{navItem.header}</h5>
                <div>{navItem.details}</div>
            </NavDescriptionElement>
        </StyledGeneralWords>
    );

};


export default Details;