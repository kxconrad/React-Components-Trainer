import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import configuration from '../../data/publicApisConfig';

const StyledWrapper = styled.div`
    padding: 20px;
    & select{
        max-width: 350px;
    }
`;


const PublicApis = () => {

    const [selectObject, setSelectObject] = useState(configuration[0]);
    const [activeSubSelect, setActiveSubSelect] = useState(selectObject.subCategories[0]);

    const selectedSubCategory = useRef(null);
    const queryWordsHeader = useRef(null);


    useEffect(() => {
        const queryWords = `<h3>query:</h3> <b>${selectObject.category}</b> ----> <b>${selectedSubCategory.current.selectedOptions[0].value}</b>`;
        queryWordsHeader.current.innerHTML = queryWords;

    }, [selectObject, activeSubSelect]);


    const updateCategory = (event) => {

        configuration.forEach((item) => {
            if (item.category == event.target.value) {
                setSelectObject(item);
            }
        });

    }

    const updateSubSategory = (event) => {

        selectObject.subCategories.forEach((item) => {
            if (item.value == event.target.value) {
                setActiveSubSelect(item);
            }
        });

    }

    const categoriesOptions = configuration.map((item) => {
        return <option
            key={item.category}
            value={item.category}>
            {item.categoryTxt}
        </option>
    });

    const subCategoriesOptions = selectObject.subCategories.map((item) => {
        return <option
            key={item.value}
            value={item.value}>
            {item.valueTxt}
        </option>
    });

    console.log("selectObject: ", selectObject);
    console.log("selectObject.category: ", selectObject.category);

    return (
        <StyledWrapper className="d-flex flex-row">
            <div className="me-5">
                {console.log("rerendered")}
                <h5>Select category for search:</h5>
                <select className="form-select" onChange={updateCategory}>
                    {categoriesOptions}
                </select>
                <br />
                <h5>Select specific one from category:</h5>
                <select className="form-select" ref={selectedSubCategory} onChange={updateSubSategory}>
                    {subCategoriesOptions}
                </select>
            </div>
            <div className="ms-5">
                <h5 ref={queryWordsHeader}></h5>
            </div>

        </StyledWrapper>
    );
}

export default PublicApis;