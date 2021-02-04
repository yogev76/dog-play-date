import React from 'react' ;
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Row, Form, Jumbotron, } from "react-bootstrap"
import { Redirect } from 'react-router-dom';
import DogCard from './DogCard';
import './SearchBar.css';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityValue: "",
            genderValue: "",
            ageValue: "",
            isRedirect: false
          };
         this.handleSubmit = this.handleSubmit.bind(this) ;
    }
    handleInput(event , key) {
       const value = event.target.value 
        this.setState( {
             [key] : value 
           })
      
    }
    handleSubmit(event) {
        this.setState( {
            isRedirect : true
        })
    }
    render() {

        const dogToShow = this.props.allDogs.filter((filtered) => {
           let isCity =  filtered.city == this.state.cityValue || this.state.cityValue == ""
           let isAge = filtered.age == this.state.ageValue || this.state.ageValue ==""
           let isGender = filtered.gender == this.state.genderValue || this.state.genderValue ==""

           return filtered.hasHome == false && isCity && isAge && isGender 
            // return filtered.hasHome == false; 

        })
        const dogCardElement = dogToShow.map((dog) => {
            return <DogCard dogName={dog.name} 
                            dogAge={dog.age}                   
                            dogBreed={dog.breed}                    
                            dogGender={dog.gender}    
                            dogAbout={dog.aboutme}  
                            dogCity={dog.city}                                   
                            dogPic={dog.pic} 
                                                  />

        })

        if (this.state.isRedirect) {
            return <Redirect to={{
                pathname: '/adopt',
                state: {oldState: this.state}
            }} />
        }
        // console.log(dogToShow);
    return ( 
         <div>
        <Form className="form-pic">
          <h1>כלבים לאימוץ </h1>
          <Row>
              <Form.Group as={Col} controlId="formGridCity" type="date">
              <Form.Label>מיקום בארץ : </Form.Label>
              <Form.Control as="select" 
                            defaultValue={this.state.cityValue}
                            onChange={(e) => {this.handleInput(e, "cityValue")}}>
                  <option value="">---בחר עיר --- </option>                         
                  <option value="תל-אביב">תל-אביב</option>
                  <option value="רמת גן">רמת גן</option>  
                  <option value="גבעתיים">גבעתיים</option>
                  <option value="הרצליה">הרצליה</option>    
                  <option value="חולון">חולון</option>
                  <option value="בת-ים">בת-ים</option>  
              </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
              <Form.Label>מין : </Form.Label>
              <Form.Control as="select" 
                  defaultValue={this.state.genderValue}
                  onChange={(e) => {this.handleInput(e, "genderValue")}}>
                  <option value="">---בחר מגדר --- </option>                                         
                  <option value="זכר">זכר</option>
                  <option value="נקבה">נקבה</option>
              </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>גיל :</Form.Label>
              <Form.Control as="select" 
                  defaultValue={this.state.ageValue}
                  onChange={(e) => {this.handleInput(e, "ageValue")}}>
                  <option value="">---בחר גיל --- </option>                                         
                  {/* <option value="0.1">0-6 חודשים</option>
                  <option value="0.5">6-12 חודשים</option>   */}
                  <option value="1">שנה</option>
                  <option value="2">שנתיים</option>    
                  <option value="3">שלוש</option>
                  <option value="4">ארבע</option>    
              </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>גודל :</Form.Label>
              <Form.Control as="select" 
                  defaultValue={this.state.yearValue}
                  onChange={(e) => {this.handleInput(e, "yearValue")}}>
                  <option value="">---בחר גודל --- </option>                                         
                  <option value="1">קטן מאוד</option>
                  <option value="2">קטן</option>  
                  <option value="3">גדול</option>
                  <option value="4">ענק</option>    
              </Form.Control>
              </Form.Group>
          </Row>
          <div></div>

          <Button onClick={this.handleSubmit} variant="outline-warning" type="button">
             מצא לי כלב לאימוץ
          </Button>
          </Form>
          <br></br>
   <Row>
        {/* {dogCardElement}  */}
         </Row>
   <Jumbotron>
  
   </Jumbotron>
 </div>          

)
}
}

export default SearchBar;