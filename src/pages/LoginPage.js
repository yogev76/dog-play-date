import React from 'react';
import users from '../data/users.json'
import { Button, Form, Modal } from 'react-bootstrap';

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email : '',
            password : ''
        }
    }
    validateLogin = () => {
        console.log(this.state.password , users.pwd,  this.state.email , users.email)
        for(let i = 0 ; i< users.length ; i++) {
            if (users[i].pwd == this.state.password && users[i].email == this.state.email) {
                // console.log(users[i].name);
                this.props.handleLogin(users[i])
                window.location = "/#/" ;
                return ;
                // alert ("welcom");
            }
            
        }
        alert ("user wont foud");
    }
    render() {
        console.log(users);
        return (
            <div className="c-login-page">
                <h1>התחבר</h1>
 
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>כתובת דוא"ל :</Form.Label>
                        <Form.Control type="email"
                         onChange={(event) => {this.setState({email : event.target.value})}} 
                        value={this.state.email}/>

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>סיסמא :</Form.Label>
                        <Form.Control type="password"
                         onChange={(event) => {this.setState({password : event.target.value})}} 
                         value={this.state.password}/>
                    </Form.Group>
                   <div>
                    <Button onClick={this.validateLogin} block="true" variant="primary" type="button">
                        התחבר
                    </Button>
                    </div>
               </Form>
                   
<a href="/#/signup">הרשם</a>
            </div>
        )
    }
}

export default LoginPage;