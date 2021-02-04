import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

class Ad extends React.Component {
    constructor(props) {
        super(props)
    }
      

render() {
    console.log(this.props.item.body);
    //const adList = this.props.item.map((item)  => {
       // return             <Card />

        //     <Card>
        //     <Card.Header>
        //       <Accordion.Toggle as={value.Body} variant="link" eventKey="0">
        //         Click me!
        //       </Accordion.Toggle>
        //     </Card.Header>
        //     <Accordion.Collapse eventKey="0">
        //       <Card.Body>Hello! I'm the body</Card.Body>
        //     </Accordion.Collapse>
        //   </Card>
       //   })
    return (
        <Accordion defaultActiveKey="1">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} eventKey="0">
      {this.props.item.title}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>{this.props.item.body}</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
        // <div>i am an add</div>
    )
}

}   

export default Ad;