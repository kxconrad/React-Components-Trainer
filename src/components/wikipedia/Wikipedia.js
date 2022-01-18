import React, { useState, useEffect } from 'react';
import SearchInput from '../general/element/SearchInput';
import LoadingSpinner from '../general/element/LoadingSpinner';
import wikipediaApi from '../../api/WikipediaApi';
import ResponseDisplayer from './ResponseDisplayer';


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
        <form className="d-flex flex-column h-100" onSubmit={onSubmit}>
            <SearchInput inputValue={query} onUpdateInput={onUpdateInput} inputDisabled={objectDetails.inputDisabled} />
            <div className="d-flex align-items-center justify-content-center h-100" style={{ marginTop: '20px', marginBottom: '20px' }}>
                {objectDetails.inputDisabled ? <LoadingSpinner /> : <ResponseDisplayer responseList={objectDetails.responseList} />}
            </div>

        </form>

    );
};


export default Wikipedia;