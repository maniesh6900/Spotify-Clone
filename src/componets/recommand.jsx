import styled from "styled-components"

const Containter = styled.div`
  display : flex;
  align-items : center ;
  justify-content : start;
`;

const AlbumInfo = styled.div`
  width : 230px;
  height : auto;
  padding : 15px;
  background-color : 
`;

const AlbumImg = styled.img`
  width : 200px;
  height : auto;
  padding : 0px 10px;
`;

const AlbumTitle = styled.h4`
 padding : 0px 10px;
`;


const Recommand = ({data}) => {
  return (<>
  <Containter>
    {data.map((item)=> (
        <AlbumInfo key={item.id}>
            <AlbumImg src={item.img}></AlbumImg>
            <AlbumTitle>{item.name}</AlbumTitle>  
        </AlbumInfo>
        )) 
    }
    </Containter>
    </>
  )
}

export default Recommand