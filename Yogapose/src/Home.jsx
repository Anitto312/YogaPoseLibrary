import "./css/Home.css"
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <div className="Home">
            <p class="content-yoga">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A totam, tempora repudiandae eius deserunt ipsa odio magnam non.<br/>
             Harum provident consequuntur odio obcaecati quidem voluptates dolor ea enim itaque sunt!Quo officia commodi quasi nesciunt <br />
             facilis voluptates sint cumque vitae placeat quisquam totam voluptas laudantium praesentium beatae dicta ducimus sit incidunt <br />
              culpa tenetur aut, laboriosam atque asperiores! Aut, dolores explicabo?</p>
            <Link to='/Library'><button class="start">Get Started</button></Link>
        </div>
    )
}
export default Home;