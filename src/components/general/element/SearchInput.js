import React from 'react';
import styled from 'styled-components';

const StyledSearchInput = styled.div`
    min-height: 95px;
`;


const SearchInput = ({ inputValue, onUpdateInput }) => {

    return (
        <StyledSearchInput>
            <label htmlFor="search" className="form-label">Type your searching words</label>
            <input type="text" id="search" className="form-control search-input" onChange={onUpdateInput} value={inputValue} />
            <div className="form-text">
                Press <b>enter</b> to get results.
            </div>
        </StyledSearchInput>
    );

};


export default SearchInput;