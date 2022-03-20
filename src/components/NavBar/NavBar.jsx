//import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap' here import all the librarie of bootstrap, this do more heavy the project
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Wawawaffles</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Alimentos</Nav.Link>
            <Nav.Link href="#pricing">Bebidas</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link eventKey={2} href="#memes">
                <CartWidget/>
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar