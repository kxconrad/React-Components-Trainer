import React from 'react';
import DOMPurify from 'dompurify';
import styled from 'styled-components';


const StyledListWrapper = styled.div`
    height: 100%;
    position: relative;
    width: 100%;
    justify-content: center;
    display: flex;

    & ul{
        overflow: auto;
        height: 100%;
        list-style: none;
        position: absolute;
        margin: 0px;
        padding: 0px;

        & li{
            border: 1px solid red;
            // max-width: 400px;
            padding: 10px;
            margin-top: 3px;
        }
    }
`;


const ResponseDisplayer = ({ responseList }) => {

    const displayList = responseList.map((listItem) => {

        const cleanTitle = DOMPurify.sanitize(listItem.title, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }).replace(/&nbsp;/g, '');
        const cleanSnippet = DOMPurify.sanitize(listItem.snippet, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }).replace(/&nbsp;/g, '');

        return <li key={listItem.pageid}>
            <h5>{cleanTitle}</h5>
            <p>{cleanSnippet}</p>
        </li>;
    });

    return (
        <StyledListWrapper>
            <ul>
                {displayList}
            </ul>
        </StyledListWrapper>

    );
};


export default ResponseDisplayer;