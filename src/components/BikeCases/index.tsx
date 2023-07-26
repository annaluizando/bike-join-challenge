import styled from "styled-components";
import { useEffect, useState } from "react";
import { Description } from "../../globals";
import { TheftCase } from "../../types/bike";
import DefaultImage from "/bike.svg";

const BikeCasesGrid = styled.div`
    display: grid;
    width: 50rem;
    height: 180rem;
    justify-items: right;
    /* justify-items: center; */
    /* height: 700px; */
`; 

// breakpoint: 700

const BikeCardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 250px;
    background-color: white;
    border: 2px solid #0D1B2A;
    border-radius: 4px;
`;

const SideTextContainer = styled.div`
    width: 310px;
    margin-right: 3rem;
`;

const Title = styled.h2`
    font-size: 14px;
`;

const TheftDate = styled(Description)`
    font-style: italic;
`;
const ReportDate = styled(Description)`
    font-style: italic;
`;

const BikeImage = styled.img`
    height: 250px;
    width: 350px;
`;

const DefaultImageContainer = styled.div`
    height: 250px;
    width: 350px;
    display: grid;
    justify-content: center;
    align-items: center;
`;

export default function BikeCases() {

    // it is working, it's returning number of stolen bikes by the result of search

    const [totalPosts, setTotalPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            fetch('https://bikeindex.org:443/api/v3/search/count?location=IP&distance=10&stolenness=stolen')
                .then((response) => response.json())
                .then((data) =>{
                    setTotalPosts(data.stolen);
                })
                .catch((err) => {
                    console.error(
                        "Ooops, something went wrong"
                    )
                });
                
            setTotalPosts(totalPosts);
        }
        getPosts();
    }, []);

    const [theftCase, setTheftCase] = useState([]);
    
    useEffect(() => {
        async function getCase () {
            await fetch('https://bikeindex.org:443/api/v3/search?page=1&per_page=10&location=Berlin&distance=10&stolenness=stolen') // see how to change it to just show things in berlin area
            .then((response) => response.json())
            .then((data) => {

                setTheftCase(data.bikes);

            })
            .catch((err) => {
                console.error(
                    "Ooops, something went wrong"
                    )
            });
            
        }
        
        getCase();
        
    }, []);
    

    const [registrerdateunix, setRegistrerDate] = useState ();

    
    useEffect(() => {
        async function getById(theftcase: TheftCase) {
            await fetch(`https://bikeindex.org:443/api/v3/bikes/${theftcase.id}`)
            .then((response) => response.json())
            .then((data) => {
                
                // setRegistrerDate(data.bike.registration_created_at);
                // console.log(data.bike.registration_created_at)
                
            })
            .catch((err) => {
                console.error(
                    "Ooops, something went wrong"
                    )
                });
            }

    }, []);

    function formatUnixTimestamp(unixTimestamp) {
        const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
      
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }


    return(        
        <BikeCasesGrid>
            <Description>total: {totalPosts}</Description>

            {theftCase.map((theftcase: TheftCase) => {
                
                
                return(
                    
                    
                    <BikeCardContainer key={theftcase.id}>
                        
                        {theftcase && theftcase.large_img ? (
                            <BikeImage alt="bike image" src={theftcase.large_img}></BikeImage> 
                        ) : <DefaultImageContainer> <img src={DefaultImage}/> </DefaultImageContainer> 
                        
                        }

                        {/* search if its semanticall to create a image tag instead of putting a img with classname */}
                        
                        <SideTextContainer>
                            <Title>{theftcase.title}</Title>
                            <Description>{theftcase.description}</Description>
                            <TheftDate>Theft date: {formatUnixTimestamp(theftcase.date_stolen)} - Location: {theftcase.stolen_location}</TheftDate>
                            <ReportDate>Report date: {}</ReportDate>
                        </SideTextContainer>

                    </BikeCardContainer>
                )
            })}
        </BikeCasesGrid>
    );
}

export{
    BikeCases,
}