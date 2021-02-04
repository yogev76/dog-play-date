import React from 'react';
import { Navbar , Nav , NavDropdown} from 'react-bootstrap';

class AppNavbar extends React.Component {
    render() {
      const loginMenu = (this.props.activeUser) ? 
       ( 
        <Nav className="ml-auto">
        <Nav.Link href="">{`שלום ${this.props.activeUser.name}`}</Nav.Link>
        <Nav.Link onClick={this.props.handleLogout}>צא</Nav.Link>
    </Nav> )
      : (
        <Nav className="ml-auto">
        <Nav.Link href="/#/login">התחבר</Nav.Link>
        <Nav.Link href="/#/signup">הרשם</Nav.Link>
    </Nav>)
      
    return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/#/">Play - Date</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="/#/">Home</Nav.Link> */}
            <Nav.Link href="/#/magazine">מגזין</Nav.Link>
            <Nav.Link href="/#/adopt">אימוץ/אומנה</Nav.Link>
            <Nav.Link href="/#/newadd">מודעה</Nav.Link>
            <Nav.Link href="/#/personal">אזור אישי</Nav.Link>
            <Nav.Link href="/#/playdate">Play Date</Nav.Link>
            <Nav.Link href="/#/events">אירועים</Nav.Link>
            <Nav.Link href="/#/about">אודותינו</Nav.Link>
            <Nav.Link href="/#/contact">צור קשר</Nav.Link>
          </Nav>
        
        </Navbar.Collapse>
        {loginMenu}
        {/* <Nav className="ml-auto">
            <Nav.Link href="/#/login">התחבר</Nav.Link>
            <Nav.Link href="/#/signup">הרשם</Nav.Link>
        </Nav> */}
      </Navbar>
    ) }
} 

export default AppNavbar;