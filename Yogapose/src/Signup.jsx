import { Link } from "react-router-dom";
import "./css/Signup.css"

function Signup() {
  
  return (
    <div>
      <div className="outerbox">
        <h2>SignUp</h2>
        <form class="form-container">
        First Name
          <br />
          <input type="text" placeholder="Enter FirstName" />
          <br />
          <br />
          Last Name
          <br />
          <input type="text" placeholder="Enter LastName" />
          <br />
          <br />
          Email
          <br />
          <input type="text" placeholder="Enter Email"/>
          <br />
          <br />
          phoneNumber <br />
          <input type="number" placeholder="Enter Phonenumber"/>
          <br />
          <br />
          Password <br />
          <input type="password" placeholder="Enter Password" />
          <br />
          <br />
          <button type='submit'>Submit</button>
        </form><br />
        <div>
          Already having an account? <Link to="/Login">Login</Link>
        </div>
      </div>
    </div>
  );
}
export default Signup;