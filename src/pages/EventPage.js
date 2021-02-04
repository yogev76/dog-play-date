import React from 'react';
import axios from 'axios';

class EventPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // axios.get("data/users.json").then((res) => {
        //     const dogId = res.data[0].dogid ;
        //     axios.get("data/dogs.json").then((res) => {
        //         const dog = res.data.filter((item) => {
        //             return dogId === item.id;
        //         });   
        //         console.log(dog[0]) 
        //     })
        
            
        // } )
        axios.get("data/users.json").then((res) => {
            const dogId = res.data[3].dogid ;
            axios.get("data/dogs.json").then((res) => {
                const dog = res.data.filter((item) => {
                    return dogId.includes(item.id);
                });   
                console.log(dog) 
            })
        
            
        } )
        return (
            <div>אירועים</div>

        )
    }
}

export default EventPage;