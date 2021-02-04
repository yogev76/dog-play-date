import React  from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

class NewLoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: true
          };
        
          this.openModal = () => this.setState({ isOpen: true });
          this.closeModal = () => this.setState({ isOpen: false });
        }
    render() {
        // const showModal = (this.props.showLogin) ? <Modal show={this.state.isOpen} onHide={this.closeModal}> : <Modal show={this.props.showLogin} onHide={this.closeModal}>}
        
        return (   
            <div>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "100vh" }}
            >
              {/* <Button variant="primary" onClick={this.openModal}>
                Launch demo modal
              </Button> */}
            </div>
           
            <Modal show={this.state.isOpen} onHide={this.closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>כתובת דוא"ל :</Form.Label>
                        <Form.Control type="email" />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>סיסמא :</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <Modal.Footer>
                      <div>
                    <Button block variant="primary">
                        התחבר
                    </Button>
                    </div>
                    </Modal.Footer>
                    </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.closeModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            </div>
        );
      }
    }

export default NewLoginPage;