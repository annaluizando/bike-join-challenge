import styled from "styled-components";

const FooterContainer = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BiggerButton = styled.button`
    width: 35px;
    height: 15px;
`; 

const SmallerButton = styled.button`
    width: 15px;
    height: 15px;
`;

export default function Footer() {
    return(
        <FooterContainer>
            <BiggerButton>First</BiggerButton>
            <BiggerButton>Prev</BiggerButton>
            <SmallerButton></SmallerButton>
            <BiggerButton>Next</BiggerButton>
            <BiggerButton>Last</BiggerButton>
        </FooterContainer>
    );
}