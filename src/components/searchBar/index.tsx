import styled from 'styled-components';
import calendar from '../../assets/calendar.svg';

const SearchContainer = styled.div`
    width: 90vw;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InputFields = styled.input`
    margin-right: 0.5rem;
    border: 2px solid #1B263B;
    border-radius: 5px;
    width: 685px;
    height: 25px;
`;

const SmallerInputFields = styled(InputFields)`
    height: 25px;
    width: 60px;
`;

const ConfirmButton = styled.button`
    color: #E0E1DD;
    background: #1B263B;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;

    &:hover{
        background: #415A77;
        transition: 0.3s ease-in-out;
    }
`;

const CalendarIcon = styled.button`
    margin-right: 0.5rem;
    background-image: url(${calendar});
    background-color: none;
    border: none;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 0;
    height: 26px;
    width: 26px;
`;

export default function SearchBar() {

    // const handleClick = async () => {
    //     const result = await  
    // }
    
    return(
        <>
            <form>
                <SearchContainer>
                    <InputFields type='text' placeholder='Search case descriptions'></InputFields>
                    <SmallerInputFields type='text' placeholder='from'></SmallerInputFields>
                    <CalendarIcon></CalendarIcon>
                    {/* <img src={calendar} height={26} width={26} alt='calendar'></img> */}
                    <SmallerInputFields type='text' placeholder='to'></SmallerInputFields>
                    <CalendarIcon></CalendarIcon>
                    <ConfirmButton type='submit' value='Submit' onClick={() => handleClick()}>Find cases</ConfirmButton>
                </SearchContainer>
            </form>
        </>    
    );
}

export{
    SearchBar,
    SearchContainer,
    InputFields,
    ConfirmButton,
}
