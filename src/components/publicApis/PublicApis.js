import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import configuration from '../../data/publicApisConfig';
import LoadingSpinner from '../general/element/LoadingSpinner';
import publicApisApi from '../../api/publicApisApi';
import useRequest from '../../hooks/useRequest';

const StyledWrapper = styled.div`
    padding: 20px;
    & select{
        max-width: 350px;
    }
`;


const PublicApis = () => {

    const [category, setCategory] = useState(configuration[0]);
    const [subCategory, setSubCategory] = useState(configuration[0].subCategories[0]);

    const url = subCategory.api + subCategory.endpoint;
    const [responseData, setResponseData] = useRequest(publicApisApi, url);

    const categorySelect = useRef(null);
    const subCategorySelect = useRef(null);
    const queryWordsHeader = useRef(null);


    useEffect(() => {

        const queryWords = `<h3>query:</h3> <b>${categorySelect.current.value}</b> ----> <b>${subCategorySelect.current.selectedOptions[0].value}</b>`;
        queryWordsHeader.current.innerHTML = queryWords;

        console.log("category: ", category);
        console.log("subCategory: ", subCategory);

    }, [category, subCategory]);

    const onSelectChange = (event) => {

        configuration.forEach((item) => {
            if (item.value == event.target.value) {
                setResponseData(null);
                setCategory(item);
                setSubCategory(item.subCategories[0]);
            }
        });

    }

    const onSubSelectChange = (event) => {

        category.subCategories.forEach((item) => {
            if (item.value == event.target.value) {
                setResponseData(null);
                setSubCategory(item);
            }
        });

    }

    const categoriesOptions = configuration.map((item) => {
        return <option
            key={item.value}
            value={item.value}>
            {item.categoryTxt}
        </option>
    });

    const subCategoriesOptions = category.subCategories.map((item) => {
        return <option
            key={item.value}
            value={item.value}>
            {item.valueTxt}
        </option>
    });


    return (
        <StyledWrapper className="d-flex flex-column">
            <div className="d-flex flex-row">
                <div className="me-5">
                    {console.log("rendered")}
                    <h5>Select category for search:</h5>
                    <select className="form-select" ref={categorySelect} onChange={onSelectChange}>
                        {categoriesOptions}
                    </select>
                    <br />
                    <h5>Select specific one from category:</h5>
                    <select className="form-select" ref={subCategorySelect} onChange={onSubSelectChange}>
                        {subCategoriesOptions}
                    </select>
                </div>
                <div className="ms-5">
                    <h5 ref={queryWordsHeader}></h5>
                </div>
            </div>
            <div className="mt-5 response-wrapper">
                <h3>response:</h3>
                {!responseData ?
                    <LoadingSpinner />
                    : <div>{JSON.stringify(responseData)}</div>
                }

            </div>

        </StyledWrapper>
    );
}

export default PublicApis;