import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';


import styled from "styled-components"


const Container = styled.div`
    background-color : rgba(91, 245, 91, 1);
    border-radius : 7px;
`;
const PlayLIstCover = styled.div`
    padding : 25px;
    display :flex;
    align-items: center;
    background-color : rgba(28, 31, 28, 1);

`;

const CoverImg = styled.div`
    height : 140px; 
    width : 140px; 
    background-color : black;
`;
const CoverInfo = styled.div`
    margin-left : 20px;
`;
const CoverTitle = styled.h2`
    line-height : 0px;
`;
const CoverDesc = styled.span`

`;
const CoverOwner = styled.div`
    display :flex;
    align-items: center;
    font-weight : 700;
    margin-top : 30px;
`;
const AddtionalOptions = styled.div`
    display :flex;
    align-items: center;
    justify-content : space-between;
    background-color : rgba(33, 38, 33, 0.2);
    padding : 20px;
`;
const Left = styled.div`
    display :flex;
    align-items: center;
    
`;
const Status = styled.div``;
const Options = styled.div``;
const Right = styled.div`
    display :flex;
    align-items: center;
`;

const P = styled.p`
    margin : 0px 10px;
`;
const SongsIndexing = styled.div``;

const Table = styled.table`
    background-color : rgba(43, 43, 40, 0.4)
`;

const Tr = styled.tr`

`;
const Th = styled.th`
    padding : 10px 20px ;
`;
const Tbody = styled.tbody`
    
`;

const Td = styled.td`
    text-align : center;
    padding-left : 10px;
    padding-bottom : 10px;

`;




const PlayList_songs = () => {
const count = 1;

  return (
   <>
    <Container>
        <PlayLIstCover>
            <CoverImg></CoverImg>
            <CoverInfo>
                <CoverTitle>Super Hit Of 90s</CoverTitle>
                <CoverDesc>Super Hit Of 90s</CoverDesc>
                <CoverOwner><AccountCircleSharpIcon/> Maniesh Ahirwar ~ {"Additional Infomations"} </CoverOwner>
            </CoverInfo>
        </PlayLIstCover>
        <AddtionalOptions>
            <Left>
                <Status><PlayCircleIcon style={{fontSize : "50px"}} /></Status>
                <Options><MoreHorizSharpIcon style={{fontSize : "30px"}} /></Options>
            </Left>
            <Right>
                <P>List</P>
                <FormatListBulletedIcon />
            </Right>
        </AddtionalOptions>
        
        <SongsIndexing>
        <Table>
            <Tbody>
                <Tr >
                    <Th style={{width : "5vw" ,textAlign: "center"}}>#</Th> 
                    <Th style={{width : "35vw" ,textAlign: "left" }}>Title</Th> 
                    <Th style={{width : "25vw", textAlign: "center" }}>Ablum</Th>
                    <Th style={{width : "25vw", textAlign: "center"}}>Date added</Th>
                    <Th style={{width : "5vw", textAlign: "center"}}><QueryBuilderIcon/></Th>
                </Tr>         
                <Tr>
                    <Td >{count}</Td>
                    <Td style={{textAlign: "left"}}>The Night We Met</Td>
                    <Td>The Night We Met</Td>
                    <Td>Birth</Td>
                    <Td>3 : 30</Td>
                </Tr>
            </Tbody>
            </Table>    
        </SongsIndexing>       
    </Container>
   </>
  )
}

export default PlayList_songs