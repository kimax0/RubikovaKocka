import { Container, Image, Nav, Navbar, NavbarBrand } from "react-bootstrap"
import { NavLink } from "react-router"

const Navigacija = () => {
  return (
    <Navbar expand="sm">
      <Container className="container-fluid">
        <NavbarBrand>
          <NavLink to="/" className="text-reset text-decoration-none">
            <Image alt="Ikonica rubikove kocke" src="/rubik.png" width="30" height="30" className="m-1" />
            Rubikove Kocke
          </NavLink>
        </NavbarBrand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <NavLink to="/istorija" className="p-1 text-reset text-decoration-none ms-auto">
              Istorija
            </NavLink>
            <NavLink to="/varijante" className="p-1 text-reset text-decoration-none ms-auto">
              Varijante
            </NavLink>
            <NavLink to="/uputstvo" className="p-1 text-reset text-decoration-none ms-auto">
              Uputstvo
            </NavLink>
            <NavLink to="/kviz" className="p-1 text-reset text-decoration-none ms-auto">
              Kviz
            </NavLink>
            <NavLink to="/en" className="p-1 text-reset text-decoration-none ms-auto">
              English
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigacija