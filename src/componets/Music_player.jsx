import styled from "styled-components"

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const Container = styled.div`
`;

const Wrapper = styled.div`
  width : 100vw;
  position : fixed;
  bottom : 0px;
  height : 90px;
  display : flex;
  justify-content : space-between;
  background-color : rgba(66, 74, 66, 1);
`;

const CurrectMusic = styled.div`

  margin : 10px 10px ;
  width : 400px;
  background-color : white;
`;

const Image = styled.div`

`;

const Img = styled.img`

`;

const RangeWrapper  = styled.div`
  
`;
const Controller = styled.div`
  display : flex;
  align-items : center;
  justify-content : space-around;
  margin-top : 10px;
`;

const ControllerWrapper = styled.div`
  display : flex;
  align-items : center ;
  justify-content : center;
  height : 35px;
  width : 35px;
  
  border-radius : 45px;
  margin : 0px 5px ; 

  &:hover{
    background-color : #272927;
  }
`;

const Range = styled.div`
  display : flex;
  align-items : center;
  justify-content : center;
  
`;
const Input  = styled.input`
  width : 700px;

`;
const ValumeRange  = styled.div`
  display : flex;
  align-items : center;
  margin-right : 100px;
  
`;

const HowerWrapper = styled.div`
  display : flex;

`;


const MusicPlayer = () => {
  return (<>
    <Container >
        <Wrapper>
          <CurrectMusic>
            <Image>
              <Img></Img>
            </Image>
          </CurrectMusic>
          <RangeWrapper>
            <Controller>
              <ControllerWrapper>
                <SkipPreviousIcon  style={{fontSize : "20px"}}/>
              </ControllerWrapper>
              <HowerWrapper>
                <ControllerWrapper>
                  <PauseIcon  style={{fontSize : "35px"}} />
                </ControllerWrapper>
                <ControllerWrapper>
                <PlayArrowIcon style={{fontSize : "35px"}} />
                </ControllerWrapper>
              </HowerWrapper>
              <ControllerWrapper>
                <SkipNextIcon   style={{fontSize : "20px",}} />
              </ControllerWrapper>
            </Controller>
            <Range>
              <Input type="range"/>
            </Range>                                           
          </RangeWrapper>
          <ValumeRange style={{marginLeft : "25px"}}>
            <VolumeUpIcon />
            <Input type="range" style={{width : "100px"}}/> 
          </ValumeRange>
        </Wrapper>
    </Container>
    </>)
}

export default MusicPlayer