import styled from "styled-components"
import SpaIcon from '@mui/icons-material/Spa';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import DevicesFoldSharpIcon from '@mui/icons-material/DevicesFoldSharp';
import DevicesFoldOutlinedIcon from '@mui/icons-material/DevicesFoldOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {useNavigate} from "react-router-dom"
import { useState } from "react";

const Containter = styled.div`
  height : 40px;
  display : flex;
  margin-bottom : 25px;
`;
const Logo = styled.div`
  flex : 1;   
  display : flex;
  justify-content: center;
  align-items : center;

  &:hover{
    color : white;
  }

`;

const Main = styled.div`
  flex : 12;
  display : flex;
  justify-content: center;

`;

const Home = styled.div`
  margin: 2px 15px;
  height: 35px;
  width: 35px;
  background-color: #2b2b24;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputContainter = styled.div`
  margin: 2px 5px;
  width : 390px;
  background-color: #2b2b24;
  border-radius: 50PX;
  display: flex;
  align-items: center;
  padding-left: 5px;
`;


const Search = styled.div`
  margin: 0px 5px;
  display: flex;
  align-items: center;

`;

const InputBtn = styled.div``;

const Input = styled.input`
  height: 25px;
  background-color: #2b2b24;
  color: white;
  width: 290px;
  border: none;

  &:focus{
    outline: none;
  }
`;

const Collections = styled.div`
  width : 50px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Hisotry = styled.div`
  flex : 1; 
  display: flex;
  align-items: center;
  justify-content: space-evenly;

`;

const Profile = styled.div`
  height : 25px;
  width : 25px;
  background-color : white;
  border-radius : 50%;

`;


const Nevbar = () => {

const [select, setSelect] = useState(null);

const navigate = useNavigate();

const handleSelect = (i) =>{
  setSelect(!select)
}


  return (
    <>
      <Containter>
        <Logo> 
          <SpaIcon  onClick={() => navigate("../home")} />
        </Logo>
        <Main>
          <Home>
          <HomeIcon />
          </Home>
          <InputContainter>
            <Search>
              <SearchIcon/>
            </Search>
            <InputBtn>
              <Input placeholder={"search here"} />| 
            </InputBtn>
            <Collections onClick={handleSelect}> 
                {
                  select ?  <DevicesFoldSharpIcon /> : <DevicesFoldOutlinedIcon/>
                }
            </Collections>
          </InputContainter>
        </Main>
        <Hisotry>
          <NotificationsNoneIcon />
          <Profile onClick={() => navigate("../profile")} />
        </Hisotry>
      </Containter>
    </>    
  )
}

export default Nevbar