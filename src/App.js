import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NewAdd from './pages/NewAdd';
import PersonalPage from './pages/PersonalPage';
import Adopt from './pages/Adopt';
import PlayDate from './pages/PlayDate';
import Magazine from './pages/Magazine';
import About from './pages/About';
import { Container} from 'react-bootstrap';
import AppNavbar from './components/AppNavbar';
import SignupPage from './pages/SignupPage';
import Events from './pages/Events';


function App() {
  return (
    <HashRouter>
      <Container>
        <AppNavbar />
      {/* <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Play-Date APP</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/#/">Home</Nav.Link>
      <Nav.Link href="/#/login">Login</Nav.Link>
      <NavDropdown title="DropDown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar> */}
      <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/signup">
            <SignupPage />
          </Route>
          <Route exact path="/newadd">
            <NewAdd />
          </Route>
          <Route exact path="/personal">
           <PersonalPage />
          </Route>
          <Route exact path="/adopt">
            <Adopt />
          </Route>
          <Route exact path="/playdate">
            <PlayDate />
          </Route>
          <Route exact path="/magazine">
            <Magazine />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
      </Switch>
      </Container>
    
    </HashRouter>
  );
}

export default App;
