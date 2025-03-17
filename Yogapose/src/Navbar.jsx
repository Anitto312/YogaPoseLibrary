import { Link } from "react-router-dom"
import "./css/Navbar.css"
const Navbar=()=>{
    return(
        <header>
            <nav>
                <li><Link to="/" class="linktag">Home</Link></li>
                <li><Link to="/Library"class="linktag">Library</Link></li>
                <li><Link to="/Tasks" class="linktag">Tasks</Link></li>
                <li><Link to="/Acheivements" class="linktag">Acheivements</Link></li>
                <li><Link to="/Help" class="linktag">Help</Link></li>
                <li><Link to="/Login" class="linktag">Login</Link></li>
            </nav>
        </header>
    )
}
export default Navbar;