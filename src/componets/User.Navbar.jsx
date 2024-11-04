import styled from "styled-components"
import SpaIcon from '@mui/icons-material/Spa';


const Wrapper = styled.div`
    display : flex;
    align-items : center;
`;
const Containter = styled.div`
  height : 40px;
  display : flex;
  justify-content : space-between;
  margin : 0px 25px;
  padding : opx 25px;
`;
const Profile = styled.div`
  height : 25px;
  width : 25px;
  background-color : white;
  border-radius : 50%;
  
`;
const P = styled.p`
    color : #adaca8;
    margin-left : 10px;
    font-weight : 700;
`;


const User_Nevbar = () => {
  return (
    <>
      <Containter>
        <Wrapper>
        <SpaIcon/><P>THIEF'S </P>
        </Wrapper>
        <Wrapper>
        <Profile />
        </Wrapper>
      </Containter>
    </>    
  )
}

export default User_Nevbar