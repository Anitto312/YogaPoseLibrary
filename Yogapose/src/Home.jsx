import "./css/Home.css"
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <div className="Home">
            <p class="content-yoga">Yoga is an ancient practice that combines physical postures, breathing exercises, and meditation to promote overall well-being.<br/>
            Originating in India over 5,000 years ago, yoga has evolved into various styles, each offering unique benefits for the mind and body.<br/>
            Practicing yoga regularly can enhance flexibility, strength, and balance while reducing stress and improving mental clarity.<br/>
            It is a holistic approach to health, connecting the body, mind, and spirit, providing a path to greater harmony and well-being.</p>
            <Link to='/Library'><button class="start">Get Started</button></Link>
        </div>
    )
}
export default Home;