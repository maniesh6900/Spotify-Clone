import styled from "styled-components"
const Containter = styled.div``;
const AlbumInfo = styled.div``;

const Recommand = ({albumData}) => {
  return (<>
  <Containter>
    {albumData.map((item)=> (
        <AlbumInfo>
            <AlbumImg></AlbumImg>
            <AlbumTitle>{item.name}</AlbumTitle>
            <AlbumTitle>{item.owner}</AlbumTitle>
            <AlbumTitle>{item.tracks}</AlbumTitle>
        </AlbumInfo>
        )) 
    }
    </Containter>
    </>
  )
}

export default Recommand