import styled from "styled-components"
import User_Nevbar from "../componets/User.Navbar";




const Container = styled.div`   
    padding : 35px;
    padding-top : 50px;
    padding-left : 150px;
    width : 50vw;
    
`;

const Info = styled.div`
    height : 100px;
    margin: 20px;

`;

const Title = styled.h2`
    font-size : 40px;
`;

const UserInfo = styled.div`
    margin-bottom :40px;
`;

const UserDetail = styled.p`
    font-weight : 700;
`;

const P = styled.p``;

const Input = styled.input`
    width : 100%;
    height : 30px;
    
`;

const Wrapper = styled.div``;

const Select = styled.select`
    width : 100%;
    height : 30px;
`;

const Option = styled.option``;

const AdditionalOprator = styled.div``;

const Btnwrapper = styled.div`
    display :flex;
    justify-content : end;
    margin-top : 30px;

`;

const Btn1 = styled.button`
    background-color : transparent;
    border: none;
    padding : 20px;
    border-radius : 7px;
    margin-right : 10px;
    font-size : 14px;
    font-weight  : 1000;
    `;
    
    const Btn2 = styled.button`
    border: none;
    
    padding : 0px 25px;
    border-radius : 35px;
    margin-left : 10px;
    background-color : #06c200;
    font-size : 14px;
    font-weight  : 1000;
`;

const Profile = () => {

  return (<>
    <User_Nevbar />
    <Container>
        <Info>
            <Title>Edit Profile</Title>
        </Info>
        <UserInfo>
            <UserDetail>Username</UserDetail>
            <P>maniesh</P>
            <UserDetail>Email</UserDetail>
            <Input value="kaj882626@gmail.com"  />
            <Wrapper>
            <UserDetail>Gender</UserDetail>
                <Select>
                    <Option disabled:true ></Option>
                    <Option>Kiya hai</Option>
                    <Option>Bas Upar-Upar Sai Kiya hai</Option>
                    <Option>Bachpan Sai Bitchless</Option>
                </Select>
            </Wrapper>
            <UserDetail>Date of Birth</UserDetail>
            <Wrapper style={{display : "flex", alignItems : "center"}}>
                <Input type="number"  value={"2002"} style={{width : "32%", marginRight : "10px"}} />
                <Select style={{width : "30%", margin : "0px 10px" }} > 
                    <Option disable="true" >March</Option>
                    <Option>jannuary</Option>
                    <Option>Febuary</Option>
                    <Option>March</Option>
                    <Option>April</Option>
                    <Option>may</Option>
                    <Option>June</Option>
                    <Option>July</Option>
                    <Option>August</Option>
                    <Option>September</Option>
                    <Option>Octuber</Option>
                    <Option>November</Option>
                    <Option>december</Option>
                </Select>
                <Input type="number" value="10" style={{width : "30%", marginLeft : "10px"}} />
            </Wrapper>
            <UserDetail>Country of region</UserDetail>
            <Select>
            <Option disable="true"> India</Option>
            </Select>
        </UserInfo>
        <hr style={{width : "95%", color : "#5c5b59", marginBottom : "40px", opacity : "0.5"}}/>
        <AdditionalOprator>
            <Btnwrapper>
                <Btn1>Cancel</Btn1>
                <Btn2>Save profile</Btn2>
            </Btnwrapper>
        </AdditionalOprator>
    </Container>
  </>)
}

export default Profile