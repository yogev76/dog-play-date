import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import Ad from '../components/Ad';


class NewAddPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.allAds)
        const adList = this.props.allAds.map((item) => {
            return <Ad item={item} /> })
    

            return (
               <div>{adList}</div>
           
               
            
            )
}
}

export default NewAddPage;