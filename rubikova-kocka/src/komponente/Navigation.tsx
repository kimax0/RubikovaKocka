import { Container, Image, Nav, Navbar, NavbarBrand } from "react-bootstrap"
import { NavLink } from "react-router"

const Navigation = () => {
  return (
    <Navbar expand="sm">
      <Container className="container-fluid">
        <NavbarBrand>
          <NavLink to="/" className="text-reset text-decoration-none">
            <Image alt="Rubik cube icon" src="/rubik.png" width="30" height="30" className="m-1" />
            Rubik's Cube
          </NavLink>
        </NavbarBrand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <NavLink to="/history" className="p-1 text-reset text-decoration-none ms-auto">
              History
            </NavLink>
            <NavLink to="/variations" className="p-1 text-reset text-decoration-none ms-auto">
              Variations
            </NavLink>
            <NavLink to="/guide" className="p-1 text-reset text-decoration-none ms-auto">
              Guide
            </NavLink>
            <NavLink to="/" className="p-1 text-reset text-decoration-none ms-auto">
              Srpski
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation