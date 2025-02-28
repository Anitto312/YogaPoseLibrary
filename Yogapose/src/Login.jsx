import { Link } from "react-router-dom";


function Login() {
  
  return (
    <div>
      <div className="outerbox">
        <h2>Login</h2>
        <form class="form-container">
          Email
          <br />
          <input type="text" placeholder="Enter your email"/>
          <br />
          <br />
          Password <br />
          <input type="password" placeholder="enter your password" />
          <br />
          <br />
          <button type='submit'>Submit</button>
        </form><br />
        <div>
          Don't have an account? <Link to="/Signup">Signup</Link>
        </div>
      </div>
    </div>
  );
}
export default Login;