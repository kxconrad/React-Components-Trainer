import styled from 'styled-components';


const CompanyStyled = styled.div`
    height: 100%;
    background-color: pink;
`;

const Company = () => {

    return (
        <CompanyStyled>
            <h3>Hellow in Company component!</h3>

            <div className="d-flex flex-row align-items-center justify-content-center mt-5">
                <div className="workers-wrapper">one container for workers</div>
                <div className="actions-wrapper">second container for actions</div>
                <div className="resources-wrapper">second container for available resources</div>
            </div>
        </CompanyStyled>
    )
}

export default Company