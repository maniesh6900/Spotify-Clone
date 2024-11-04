import data from "../PlayList"
import styled from "styled-components"
import PersonalPlayList from "./PersonalPlayList";
import axios from "axios";
import { useState, useEffect } from "react";
import Recommand from "./recommand";


const Containter = styled.div`
    background-color: rgba(41, 46, 42, 0.3);
    padding-bottom : 10px;
    border-radius : 7px;
    height : 90vh;
    width : 100vw;
    margin : 0px 10px;

`;

const Category = styled.div``;

const Info = styled.div`
    display: flex;
    
`;

const H5 = styled.h5`
    margin-left: 10px;
    padding: 7px;
    border-radius : 20px;
    background-color: #414742;

`;
const H2 = styled.h2`
&:hover{
    text-decoration : underline;
    cursor : pointer;
}
`;
const H4 = styled.h4`
&:hover{
    text-decoration : underline;
    cursor : pointer;
}
`;

const CreatedPlayList = styled.div`
    display: flex;
    align-items : center;
`;
const OwnPlayList = styled.div``;

const AddtionalAlbumsTitle = styled.div`
    margin: 0px 10px;
    display: flex;
    align-items : center;
    justify-content : space-between;
    line-height: 1px;
`;

const Recommendation = styled.div`
    width : 70vw;
    display : flex;
    flex-wrap : wrap;
    justify-content : space-around;

`;



const Albums = () => {

  return (
    <>
    <Containter>
        <Category>
            <Info>
                <H5>All</H5>    
                <H5>Music</H5>    
                <H5>Podcast</H5>    
            </Info>  
        </Category>
        <CreatedPlayList>
        <OwnPlayList>
            <PersonalPlayList data={data} />
        </OwnPlayList>
        </CreatedPlayList>
       
        <AddtionalAlbumsTitle>
            <H2>Other Albums</H2>
            <H4>Show All</H4>
        </AddtionalAlbumsTitle>
        <Recommendation>
            {/* <Recommand data={albumData} /> */}
        </Recommendation>
    </Containter>
    </>
  )
}

export default Albums