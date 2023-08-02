import styled from "styled-components";

const FooterContainer = styled.div`
    width: 60%;
    height: 55px;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const BiggerButton = styled.button`
    background-color: #1B263B;
    color: white;
    border: none;
    border-radius: 5px;
    width: 95px;
    height: 30px;
`; 

const SmallerButton = styled.button`
    background-color: transparent;
    border: none;
    width: 25px;
    height: 30px;
`;

const SelectedPage = styled.button`
    width: 30px;
    height: 30px;
    border-color: #1B263B;
    border-radius: 20px;
    background-color: transparent;
`;

export default function Footer() {
    return(
        <FooterContainer>
            {/* <BiggerButton>First</BiggerButton> */}
            <BiggerButton>Prev</BiggerButton>
            <SmallerButton>1</SmallerButton>
            <SelectedPage>1</SelectedPage>
            <SmallerButton>1</SmallerButton>
            <BiggerButton>Next</BiggerButton>
            {/* <BiggerButton>Last</BiggerButton> */}
        </FooterContainer>
    );
}