import React from 'react';
import DogCard from '../components/DogCard';
// import adupDogData from '../data/dogs.json';
import { Button, Card, Col, Row, Form } from "react-bootstrap"

// import { Button, Card, Col, Row } from "react-bootstrap"
class AdoptPage extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props.location.state);
        const oldState = (props.location.state) ? props.location.state.oldState : {} ;
        this.state = {
            cityValue: "",
            genderValue: "",
            ageValue: "",
            ...oldState
          };
    }
    handleInput(event , key) {
       const value = event.target.value 
        this.setState( {
             [key] : value 
           })
      
    }

  
    render() {
        const dogBtnText = "לאימוץ לחץ כאן";
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
                            dogBtnText="לאימוץ לחץ כאן"                 />

        })
        // console.log(dogToShow);
      //  console.log(adupDogData);
        return (
           <div>
                  <Form>
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

                    {/* <Button onClick={this.submitDate} variant="outline-warning" type="button">
                        Submit
                    </Button> */}
                    </Form>
                    <br></br>
             <Row> {dogCardElement}  </Row>
           </div>          
         
        )
    }
}

export default AdoptPage;