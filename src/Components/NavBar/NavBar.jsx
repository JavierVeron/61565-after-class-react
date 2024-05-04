import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#naturelle">Naturelle</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">    
          <Nav className="me-auto">
          <NavDropdown title="Productos" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#aceites">Aceites</NavDropdown.Item>
              <NavDropdown.Item href="#inciensos">
                Galeas
              </NavDropdown.Item>
              <NavDropdown.Item href="#jabones">Jabónes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#tes">
                Tés
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>  
          </Nav>
          <Nav>
            <Nav.Link href="#usuario">icono usuario</Nav.Link>
            <Nav.Link eventKey={2} href="#cartWidget"> icono carrito
              <CartWidget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;