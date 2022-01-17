import React, { useState } from 'react';
import SearchInput from '../general/element/SearchInput';
import LoadingSpinner from '../general/element/LoadingSpinner';
import getQuery from '../../api/WikipediaApi';


const Wikipedia = () => {

    const [query, setQuery] = useState('');

    function onUpdateInput(event) {
        const request = event.target.value;
        setQuery(request);
    }

    async function onSubmit(event) {

        event.preventDefault();
        const response = await getQuery(query).get();

        console.log("response: ", response);

    }

    return (
        <form className="d-flex flex-column h-100" onSubmit={onSubmit}>
            <SearchInput inputValue={query} onUpdateInput={onUpdateInput} />
            <div className="d-flex align-items-center justify-content-center h-100">
                <LoadingSpinner />
            </div>

        </form>

    );
};


export default Wikipedia;