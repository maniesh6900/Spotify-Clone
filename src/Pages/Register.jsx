import { useNavigate } from "react-router-dom";
import styled from "styled-components"

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


const Register = () => {

const navigate = useNavigate();

  return (
    <Container>
         <Wapper>
        <Info>
            <Title>Register</Title>
        </Info>
        <InputSection>
            <From>
            <P>User Name</P>
            <Section><InputUserName/></Section>
            <P>Email</P>
            <Section>
                <InputUserName type="email"/>
            </Section>
            <P>Password</P>
            <Section>
                <InputPassword type="password" />
            </Section>
            <Btn>Submit</Btn>
            </From>
        </InputSection>
        <OtherInfo>
            <P 
            style={{textDecoration : "underLine", fontSize : "14px"}}
            onClick={()=> navigate('../login')}
            >Already Have An account</P>
        </OtherInfo>
        </Wapper>
    </Container>
  )
}

export default Register