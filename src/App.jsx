import './App.css'
import Home from './Pages/Home'
import LogIn from './Pages/LogIn'
import OpenedAlbum from './Pages/OpenedAlbum'
import Profile from './Pages/Profile.user'
import Register from './Pages/Register'
import { Routes, BrowserRouter, Route } from "react-router-dom"
import MusicPlayer from './componets/Music_player'

function App() {


  return (
    <><BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home />}exec />
          <Route path="/home"  element={<Home />}exec />
          <Route path="/list"  element={<OpenedAlbum />}exec />
          <Route path="/login"  element={<LogIn />}exec />
          <Route path="/register"  element={<Register />}exec />
          <Route path="/profile"  element={<Profile />}exec />
        </Routes>
    </BrowserRouter>
    <MusicPlayer />
    </>
  )
}

export default App
