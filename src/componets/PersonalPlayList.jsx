import styled from "styled-components"

const Container = styled.div`                                                                                                                               
    display : flex;
    flex-wrap : wrap;
    margin : 10px 5px;
    margin-left : 100px; 
     
`;

const InfoContainer = styled.div`
    height : 60px;
    width : 19vw;
    background-color : rgba(158, 158, 158, 0.2);
    border-radius : 7px;
    margin : 0px 5px;
    display : flex;
    align-items : center;
    margin-top : 15px;
    margin-left : 5px;
    color : gray;

    &:hover{
        background-color : rgba(158, 158, 158, 1);
        transition : 0.2s ease-in-out;
        color : white;
    }
`;

const Img = styled.div`
    height : 60px;
`;

const Image = styled.img`
    height : 60px;
    border-radius : 7px;
`;

const PlayListName = styled.div`
    margin : 0px 5px;
    font-weight : 700;
`;


const PersonalPlayList = ({data}) => {


  return (<>
    <Container>
        {data.map((item)=>(
            <InfoContainer key={item.id}>
                <Img>
                    <Image src={item.img}/>
                </Img>
                <PlayListName>{item.name}</PlayListName>
            </InfoContainer>
        ))}
    </Container>
  
  </>)
}

export default PersonalPlayList