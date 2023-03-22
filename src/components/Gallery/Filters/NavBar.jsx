import Nav from "react-bootstrap/Nav";
import NavbarBts from "react-bootstrap/Navbar"; //alias
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <NavbarBts
      sticky="top"
      bg="light"
      expand="lg"
      className="d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none"
    >
      <NavbarBts.Toggle aria-controls="basic-navbar-nav">
        <span>Filtros▾</span>
      </NavbarBts.Toggle>
      <NavbarBts.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </NavbarBts.Collapse>
      {/* </Container> */}
    </NavbarBts>
  );
}

export default NavBar;
