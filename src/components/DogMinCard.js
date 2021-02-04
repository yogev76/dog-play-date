import React from 'react' ;
import { Badge, Button, Col, Row } from 'react-bootstrap';


class DogMinCard extends React.Component {
    constructor(props){
        super(props) 
    }
  
  render() {
      return (
        
            <Col xs={12} sm={6} md={4}>
              <Row>
                  <Col xs={6}>
                       <img className="img-fluid" src={this.props.dog.pic} />
                  </Col>
                  <Col xs={6}>
                        <div>{this.props.dog.name}</div>
                       <Button href={`/#/dog/${this.props.dog.id}`} > כניסה לפרופיל </Button>
                  </Col>
              </Row>

            </Col>
        
      )
  }  
} 

export default DogMinCard;