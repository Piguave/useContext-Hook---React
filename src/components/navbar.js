import { Link } from "react-router-dom";
import logo from "../assets/logo_kruger_.png"
export default function NavBar() {
  

  return (
    <div className="navbar ">
      <img src={logo} class="logo" alt="Main Logo" />


      <ul>
        <li><Link to="/" > Home </Link></li>
        <li><Link to="/create" > Create </Link></li>
      </ul>



    </div>
  );
}
