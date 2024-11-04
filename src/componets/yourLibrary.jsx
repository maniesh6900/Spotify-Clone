import ViewWeekRoundedIcon from '@mui/icons-material/ViewWeekRounded';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import TocSharpIcon from '@mui/icons-material/TocSharp';
import PlayLIstIems from './PlayListItems';
import data from "../PlayList"


import styled from "styled-components"


const Containter = styled.div`
  width : 15vw;
  margin: 0px 5px;
  padding: 5px 10px;
  background-color: #283029;
  border-radius: 7px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content : space-between;
`;

const Icon = styled.div`
  display: flex;
  align-items: center; 
`;

const H2 = styled.h4`
  padding-left: 9px;
`;

const AdditionalIcon = styled.div`
  margin: 0px 3px;
`;

const Filter = styled.div``;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: ;
  `;
  
  const H = styled.h6`
  height: 25px;
  background-color: #131413;
  margin-left: 10px;
  border-radius: 35px;
  padding: 5px;
`;

const Features = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between;
`;

const ResentInfo = styled.div``;

const H4 = styled.h4` 
  display: flex;
  align-items: center
`;

const PlayList = styled.span`
  height: 65px;
  border-radius: 7px;
  display: flex;
  margin: 7px 0px;

`;

const YourLibrary = () => {

  return (
    <>
    <Containter>
      <Title>
        <Icon>
          <ViewWeekRoundedIcon/>
          <H2> Your Library</H2>
        </Icon>
        <AdditionalIcon>
          <AddIcon/>
          <ArrowForwardIcon/>
        </AdditionalIcon>
      </Title>
      <Filter>
        <Info>
          <H><ClearIcon/></H>
          <H>PlayList</H>
          <H>By You</H>
        </Info>
      </Filter>
      <Features>
        <SearchIcon />
        <ResentInfo>
          <H4>Resent
          <TocSharpIcon/>
          </H4>
        </ResentInfo>
      </Features>
      <PlayList>
        <PlayLIstIems data={data} />
      </PlayList>
    </Containter>
    </>
  )
}

export default YourLibrary