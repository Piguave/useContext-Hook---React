import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/logo_kruger_.png"
export default function NavBar() {

  
  return (

    <>
      <Navbar expand="lg" className='navbar' >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav "   style={{ backgroundColor:  'white'  }} />
          <nav>
            <Navbar.Brand className='img-container'>
              <img className='img-fluid logo' alt="" src={logo} />
            </Navbar.Brand>
          </nav>
          <Navbar.Collapse id="basic-navbar-nav" className="navbarContItem ">
            <Nav className=" navbarL">

              <Link className="" to="/" > Home </Link>
              <Link className="" to="/create" > Create </Link>
            </Nav>
          </Navbar.Collapse>
        </Container >
      </Navbar>

    </>

  );
}
