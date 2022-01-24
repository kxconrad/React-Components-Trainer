import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchInput from '../general/element/SearchInput';
import LoadingSpinner from '../general/element/LoadingSpinner';
import wikipediaApi from '../../api/WikipediaApi';
import ResponseDisplayer from './ResponseDisplayer';


const StyledForm = styled.form`
    padding: 20px;
    height: 100%;
    & input {
        max-width: 350px;
    }
    & .list-wrapper{
        height: 100%;
    }
`;


const Wikipedia = () => {

    const [query, setQuery] = useState('');
    const [objectDetails, setObjectDetails] = useState({ inputDisabled: false, responseList: [] });
    const [searchTerm, setSearchTerm] = useState('');

    function onUpdateInput(event) {
        const request = event.target.value;
        setQuery(request);
    }

    useEffect(() => {
        if (searchTerm) {
            (async () => {
                setObjectDetails({ inputDisabled: true });
                const response = await wikipediaApi(searchTerm).get();

                console.log("response: ", response);
                if (response && response.data) {
                    setObjectDetails({ inputDisabled: false, responseList: response.data.query.search });
                }
            })();

        }

    }, [searchTerm]);


    function onSubmit(event) {
        event.preventDefault();
        setSearchTerm(query);

    }

    return (
        <StyledForm className="d-flex flex-column" onSubmit={onSubmit}>
            <SearchInput inputValue={query}
                onUpdateInput={onUpdateInput}
                inputDisabled={objectDetails.inputDisabled}
                inputHint={<>Press <b>enter</b> to get results.</>}
            >
            </SearchInput>
            < div className="d-flex align-items-center justify-content-center list-wrapper" style={{ marginTop: '20px', marginBottom: '20px', minHeight: '250px' }}>
                {objectDetails.inputDisabled ? <LoadingSpinner /> : <ResponseDisplayer responseList={objectDetails.responseList} />}
            </div >

        </StyledForm >

    );
};


export default Wikipedia;