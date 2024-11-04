import styled from "styled-components"

const Container = styled.div`
  width : 13vw;
  height : 60px;
  display : flex;
  flex-flow : column;
`;

const Img = styled.div`
  width : 3vw;
  height : 60px; 
`;

const Image = styled.img`
  width : 3vw;
  height : 60px;;
  object-fit: cover;
  border-radius : 5px;
`;

const ListInfo = styled.div`
  height :  60px;
  width : 13vw;
  
  color : #cfd4cf;
  border-radius : 5px;
  margin : 10px 0px;
  display : flex;

  &:hover{
    background-color : rgba(130, 130, 130, 0.5);
  }
`;

const ListName = styled.div`
  font-weight : 700;

`;

const ListDesc = styled.div`
`;

const InfoContainer = styled.div`
  margin : 5px 10px;
`;


const PlayLIstItems = ({data}) => {

  return (<>
    <Container>
      {data.map((item) => (
      <ListInfo key={item.id}>
        <Img>
          <Image src={item.img} />
        </Img>
        <InfoContainer>
          <ListName>{item.name}</ListName>
          <ListDesc>{item.desc}</ListDesc>
        </InfoContainer>
      </ListInfo>
      ))
      }

    </Container>
  </>)
}

export default PlayLIstItems