import styled from "styled-components";
import calendar from "../../assets/calendar.svg";

const SearchContainer = styled.div`
  width: 75vw;
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 889px) {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

const InputField = styled.input`
  border: 2px solid #1b263b;
  border-radius: 5px;
  width: 650px;
  height: 25px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  @media screen and (min-width: 890px) and (max-width: 1088px) {
    width: 400px;
  }
`;

const SmallerInputFields = styled(InputField)`
  height: 25px;
  width: 60px;
  @media screen and (min-width: 600px) and (max-width: 890px) {
    width: 95px;
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

export default function SearchBar() {
  // const handleClick = async () => {
  //     const result = await
  // }

  return (
    <>
      <form>
        <SearchContainer>
          <InputField
            type="text"
            placeholder="Search case descriptions"
          ></InputField>
          <SmallerInputFields
            type="text"
            placeholder="from"
          ></SmallerInputFields>
          <CalendarIcon></CalendarIcon>
          {/* <img src={calendar} height={26} width={26} alt='calendar'></img> */}
          <SmallerInputFields type="text" placeholder="to"></SmallerInputFields>
          <CalendarIcon></CalendarIcon>
          <ConfirmButton
            type="submit"
            value="Submit"
            onClick={() => handleClick()}
          >
            Find cases
          </ConfirmButton>
        </SearchContainer>
      </form>
    </>
  );
}

export { SearchBar, SearchContainer, InputField, ConfirmButton };
