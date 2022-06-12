import {Navbar,Container,Nav,NavDropdown } from "react-bootstrap"
import "./navbar.css"
import Logo from "./Logo/Logo.png"


function menu(){
  return (
   

  <div className="nav-bar">
 <Navbar bg="#333" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"> <img src={Logo} /> E-BOOK</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">HOME</Nav.Link>
        <Nav.Link href="#destaque">DESTAQUE</Nav.Link>
        <NavDropdown title="OUTROS" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#Cursos-containers1"><b>CURSOS</b></NavDropdown.Item>
          <NavDropdown.Item href="#Infantis-containers1"><b>INFANTIS</b></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#Religiao-containers1">
            <b>RELIGIAO</b> 
          </NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
     
    </Navbar.Collapse>
  </Container>
</Navbar>
  </div>



  );
}

export default menu;
