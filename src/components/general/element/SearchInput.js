import React from 'react';
import styled from 'styled-components';

const StyledSearchInput = styled.div`
    min-height: 95px;
    margin-bottom: 10px;
`;


const SearchInput = ({ inputValue, onUpdateInput, inputHint = false, inputDisabled = false }) => {

    return (
        <StyledSearchInput>
            <label htmlFor="search" className="form-label">Type your searching words</label>
            <input type="text" id="search" className="form-control search-input" onChange={onUpdateInput} value={inputValue} disabled={inputDisabled} />
            {inputHint ?
                <div className="form-text">
                    {inputHint}
                </div>
                : null
            }

        </StyledSearchInput>
    );

};


export default SearchInput;