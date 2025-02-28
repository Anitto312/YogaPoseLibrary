
import './App.css'
import Navbar from "./Navbar"
import Home from "./Home"
import Library from "./Library"
import Tasks from "./Tasks"
import Help from "./Help"
import Acheivements from "./Acheivements"
import Signup from './Signup'
import Login from './Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <main>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Library" element={<Library/>}></Route>
            <Route path="/Tasks" element={<Tasks/>}></Route>
            <Route path="/Help" element={<Help/>}></Route>
            <Route path="/Acheivements" element={<Acheivements/>}></Route>
            <Route path="/Signup" element={<Signup/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </main>
      
    
  )
}

export default App
