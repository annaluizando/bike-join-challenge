import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 55px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (min-width: 1295px){
    width: 90%;
  }
`;

const BiggerButton = styled.button`
  background-color: #1b263b;
  color: white;
  border: none;
  border-radius: 5px;
  width: 95px;
  height: 30px;
`;

const SmallerButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  width: 25px;
  height: 30px;
`;

const SelectedPage = styled.button`
  width: 30px;
  height: 30px;
  color: white;
  border-color: white;
  border-radius: 20px;
  background-color: transparent;
`;

export default function Footer() {
  return (
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
