import styled from "styled-components";
import calendar from "../../assets/calendar.svg";
import logo from "../../public/bike_report.svg";


const SearchContainer = styled.div`
  width: 65vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* @media screen and (min-width: 891px) and (max-width: 1010px){
    width: 10vw;
  } */
  @media screen and (max-width: 479px) {
    width: 41vw
  }
  @media screen and (max-width: 1300px) {
    width: 65vw;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  @media screen and (min-width: 1590px) and (max-width: 1800px){
    width: 65vw;
  }
  @media screen and (min-width: 1800px){
    width: 55vw;
  }
`;

const InputField = styled.input`
  background-color: #181F2D;
  border: none;
  border-radius: 5px;
  color: white;
  width: 65vw;
  height: 33px;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
    @media screen and (min-width: 1300px){
    width: 33vw;
  }

`;

const SmallerInputFields = styled(InputField)`
  width: 60px;
  height: 33px;
  color: white;
  font-family: "Poppins", sans-serif;
  @media screen and (min-width: 600px) and (max-width: 890px) {
    width: 50px;
  }
`;

const ConfirmButton = styled.button`
  color: #e0e1dd;
  background: #1b263b;
  width: 120px;
  height: 35px;
  border: none;
  border-radius: 5px;

  &:hover {
    background: #415a77;
    transition: 0.3s ease-in-out;
  }
`;

const CalendarIcon = styled.button`
  background-image: url(${calendar});
  background-color: transparent;
  border: none;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 0;
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const NavBarContainer = styled.div`
  display: flex;
  width: 65vw;
`;

const Logo = styled.img`
  height: 66px;
  margin-right: 1rem;
  @media screen and (min-width: 875px) {
    width: 212px;
  }
`;

const Form = styled.div`
  display: grid;
  align-items: center;
  width: 65vw;

`;

const SmallerInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20vw;

  @media screen and (max-width: 750px) and (max-width: 1300px){
    width: 15vw;
  }
  @media screen and (max-width: 750px) {
    width: 38vw;
  }
  @media screen and (min-width: 1800px){
    width: 12vw;
  }
`;

const GeneralContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
`;


export default function SearchBar() {
  // const handleClick = async () => {
  //     const result = await
  // }

  return (
    <GeneralContainer>

      <Logo src={logo} alt="bike-logo"></Logo>
      <NavBarContainer>
        <Form>
          <SearchContainer>
            <InputField
              type="text"
              placeholder="Search case descriptions"
            ></InputField>

            <SmallerInputContainer>
              <SmallerInputFields
                type="text"
                placeholder="from"
              ></SmallerInputFields>
              <CalendarIcon></CalendarIcon>
              {/* <img src={calendar} height={26} width={26} alt='calendar'></img> */}
              <SmallerInputFields type="text" placeholder="to"></SmallerInputFields>
              <CalendarIcon></CalendarIcon>
            </SmallerInputContainer>

            <ConfirmButton
              type="submit"
              value="Submit"
              onClick={() => handleClick()}
            >
              Find cases
            </ConfirmButton>
          </SearchContainer>
        </Form>
      </NavBarContainer>
    </GeneralContainer>
  );
}

export { SearchBar, SearchContainer, InputField, ConfirmButton };
