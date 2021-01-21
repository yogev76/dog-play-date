import { Navbar , Nav , NavDropdown} from 'react-bootstrap';

const AppNavbar = function() {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Play-Date APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/#/">Home</Nav.Link>
            <Nav.Link href="/#/magazine">Magazine</Nav.Link>
            <Nav.Link href="/#/newadd">New Add</Nav.Link>
            <Nav.Link href="/#/personal">My Page</Nav.Link>
            <Nav.Link href="/#/playdate">Play Date</Nav.Link>
            <Nav.Link href="/#/events">Events</Nav.Link>
            <Nav.Link href="/#/about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="ml-auto">
            <Nav.Link href="/#/login">Login</Nav.Link>
            <Nav.Link href="/#/signup">Signup</Nav.Link>
        </Nav>
      </Navbar>
    ) 
}

export default AppNavbar;