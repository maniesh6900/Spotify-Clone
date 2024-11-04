import styled from  "styled-components"
import { useState } from "react";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    height : 70vh;
    width : 100vw;
    display :flex;
    align-items : center;
    justify-content : center;
`;

const Wapper = styled.div`
    background-image : linear-gradient(#00ff3c, #0d6e24);
    padding  : 50px;
    border-radius : 7px;
`;
const Info = styled.div``;
const Title = styled.h2`
    font-weight : 800;
    text -align : center;
`;
const InputSection = styled.div``;
const Section = styled.div`
    padding : 0px 5px;
    width : 20vw;
    height : 3vh;
    display :flex;
    align-items : center;
    background-color : white;
    border-radius: 5px;
`;
const From = styled.form``;
const InputUserName = styled.input`
    color : #1a1919 ;
    width : 19vw;
    border : none;
    background-color : white;
    &:focus{
        outline : none;
    }
`;
const InputPassword = styled.input`
    color : #1a1919;
    width : 20vw;
    border : none;
    background-color : white;

    &:focus{
        outline : none;
    }
`;
const Span = styled.span`
    COLOR : #0ec739;
    margin-top : 7px;
    margin-LEFT : 15px;

`;
const Btn = styled.button`
    margin : 20px 0px;
    padding: 10PX;
    border-radius ; 7px;
`;
const OtherInfo = styled.div``;
const P = styled.p`
    font-weight : 700;
    font-size : 20px;
`;

const LogIn = () => {
const navigate = useNavigate();
const [password, setPassword] = useState("");

const handleChange = () =>{
    setPassword(!password)
}

  return (<>
    <Container>
        <Wapper>
        <Info>
            <Title>LOG IN</Title>
        </Info>
        <InputSection>
            <From>
            <P>User Name</P>
            <Section><InputUserName placeholder="Enter your email or username " type="text"  /></Section>
            <P>Password</P>
            <Section>
                <InputPassword placeholder="Enter Your Passowrd" type={password ? "text" : "password"} />
                <Span onClick={handleChange}>
                {password ? <VisibilityOffIcon/> : <VisibilityIcon/> }
                </Span>
            </Section>
            <Btn>Submit</Btn>
            </From>
        </InputSection>
        <OtherInfo>
            <P style={{fontSize : "14px", textDecoration : "underLIne", cursor : "pointer" }} onClick={()=> navigate('../register')} >Don't Have An account</P>
        </OtherInfo>
        </Wapper>
    </Container>
  </>)
}

export default LogIn