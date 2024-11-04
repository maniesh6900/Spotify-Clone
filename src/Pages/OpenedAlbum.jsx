import Nevbar from "../componets/Nevbar"
import Library from "../componets/yourLibrary"
import PlayList_songs from "../componets/PlayList_songs_List"

import React from 'react'

const OpenedAlbum = () => {
  return (
    <>
        <Nevbar/>
        <div style={{display : "flex", }} >
        <Library style={{width : "30vw"}} />
        <PlayList_songs style={{width : "70vw"}} />
        </div>
    </>
  )
}

export default OpenedAlbum