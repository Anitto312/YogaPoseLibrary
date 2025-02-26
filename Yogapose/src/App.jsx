
// import './App.css'
import Navbar from "./Navbar"
import Home from "./Home"
import Library from "./Library"
import Tasks from "./Tasks"
import Help from "./Help"
import Acheivements from "./Acheivements"
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
        </Routes>
      </BrowserRouter>
    </main>
      
    
  )
}

export default App
