import React from 'react';
import './App.css';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NewAddPage from './pages/NewAddPage';
import PersonalPage from './pages/PersonalPage';
import AdoptPage from './pages/AdoptPage';
import PlayDatePage from './pages/PlayDatePage';
import MagazinePage from './pages/MagazinePage';
import AboutPage from './pages/AboutPage';
import { Container} from 'react-bootstrap';
import AppNavbar from './components/AppNavbar';
import SignupPage from './pages/SignupPage';
import EventPage from './pages/EventPage';
import ContacPage from './pages/ContacPage';
import users from './data/users.json';
import allDogs from './data/dogs.json';
import allAds from './data/ads.json';
import NewLoginPage from './pages/NewLoginPage';
import Dog from './components/Dog';



class App extends React.Component { 
  constructor(props) {
    super(props)

    this.state = {
      allUsers : users , //[]
      activeUser : null,
      allAds : allAds,
      allDogs : allDogs
    }

    
  }
  handleLogin = (userObj) => {
    this.setState ({
      activeUser : userObj
    })
  }

  handleLogout = () => {
    this.setState ({
      activeUser : null
    })
    window.location = "/#/" ;
  }
  
  render() {
  return (
    <HashRouter>
      <Container>
        <AppNavbar activeUser={this.state.activeUser} handleLogout={this.handleLogout}/>
      <Switch>
          <Route exact path="/">
            <HomePage activeUser={this.state.activeUser} allAds={this.state.allAds} allDogs={this.state.allDogs}/>
          </Route>
          <Route exact path="/login">
            <LoginPage allUsers={this.state.allUsers} showLogin={true} handleLogin={this.handleLogin}/>
          </Route>
          <Route exact path="/signup">
            <SignupPage activeUser={this.state.activeUser}/>
          </Route>
          <Route exact path="/newadd">
            
            {(this.state.activeUser) ? <NewAddPage allAds={this.state.allAds}/> : <Redirect push to="/login" allUsers={this.state.allUsers}/>} 
          </Route>
          <Route exact path="/personal">
           <PersonalPage activeUser={this.state.activeUser} />
          </Route>
          <Route exact path="/adopt" render={(props) => <AdoptPage {...props} activeUser={this.state.activeUser} allDogs={this.state.allDogs}/> }>
          </Route>
          {/* <Route exact path="/adopt">
            <AdoptPage activeUser={this.state.activeUser} allDogs={this.state.allDogs}/>
          </Route> */}
          <Route exact path="/playdate">
            <PlayDatePage activeUser={this.state.activeUser}/>
          </Route>
          <Route exact path="/magazine">
            <MagazinePage activeUser={this.state.activeUser} />
          </Route>
          <Route exact path="/events">
            <EventPage activeUser={this.state.activeUser}/>
          </Route>
          <Route exact path="/contact">
            <ContacPage activeUser={this.state.activeUser}/>
          </Route>
          <Route exact path="/about">
            <AboutPage activeUser={this.state.activeUser}/>
          </Route>
          <Route exact path="/dog/:id">
            <Dog activeUser={this.state.activeUser} allDogs={this.state.allDogs} />
          </Route>
      </Switch>
      </Container>
    
    </HashRouter>
  );
}

}

export default App;
