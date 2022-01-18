import React, { useState } from 'react';
import SearchInput from '../general/element/SearchInput';
import LoadingSpinner from '../general/element/LoadingSpinner';
import getQuery from '../../api/WikipediaApi';
import ResponseDisplayer from './ResponseDisplayer';


const Wikipedia = () => {

    const [query, setQuery] = useState('');
    const [objectDetails, setObjectDetails] = useState({ inputDisabled: false, responseList: [] });

    function onUpdateInput(event) {
        const request = event.target.value;
        setQuery(request);
    }

    async function onSubmit(event) {

        event.preventDefault();
        if (query) {
            setObjectDetails({ inputDisabled: true });
            const response = await getQuery(query).get();

            console.log("response: ", response);
            if (response && response.data) {
                setObjectDetails({ inputDisabled: false, responseList: response.data.query.search });
            }
        }

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