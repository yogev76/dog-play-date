import { Button, Card, Col } from "react-bootstrap"

const DogCard = function(props) {
    return (
      <Col sm={12} md={6} lg={4}>
        <Card style={{ width: '18rem' }}>
  <Card.Img width="10px;" variant="top" src={props.dogPic} alt={props.dogName} />
  <Card.Body>
    <Card.Title>{props.dogName}</Card.Title>
    <Card.Text>
       שם  : {props.dogName} <br /> 
          גיל :  {props.dogAge} <br /> 
          מגדר :{props.dogGender} <br /> 
          עיר :{props.dogCity} <br /> 
     קצת עלי : {props.dogAbout} <br /> 
    </Card.Text>
    <Button variant="primary">{props.dogBtnText}</Button>
  </Card.Body>
</Card>
</Col>
    )

}

export default DogCard;