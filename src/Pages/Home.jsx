import Nevbar from "../componets/Nevbar"
import Library from "../componets/yourLibrary"
import Albums from "../componets/Albums"
import MusicPlayer from "../componets/Music_player"


const Home = () => {
  return (
    <>
      <Nevbar style={{margin : "25px" }} />
      <div style={{display : "flex" }}>
      <Library style={{width : "30vw"}} />
      <Albums  style={{width : "70vw"}} />
      </div>
      <MusicPlayer />
    </>
  )
}

export default Home