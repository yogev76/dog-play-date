import React from 'react';
import { Redirect, withRouter } from 'react-router';

class Dog extends React.Component {
    constructor(props) {
        super(props)

        const dogId = this.props.match.params.id;
        console.log(dogId);
        this.state = {
            dog : this.props.allDogs.find(dog => dog.id == dogId )
        } 
    }
      

render() {
    if (!this.state.dog) { return <Redirect to="/" /> }
    return (
        <div>i am a dog and my name is : {this.state.dog.name}</div>
    )
}

}   

export default withRouter (Dog);