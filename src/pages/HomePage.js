
import React from 'react';
import { Container, Row, TabContainer } from 'react-bootstrap';
import Ad from '../components/Ad';
import DogMinCard from '../components/DogMinCard';
import SearchBar from '../components/SearchBar';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityValue: "",
            genderValue: "",
            ageValue: "",
          };
    }

    render() {
        const adoptMinCard = this.props.allDogs.filter(filtered => filtered.hasHome == false) ;
        console.log(adoptMinCard)
        const adoptSel=adoptMinCard.slice(0,6);
        console.log(adoptSel);
        const adoptArr = adoptSel.map(dog => <DogMinCard key={dog.id} dog={dog} />)
        console.log(adoptArr);

                    
               
        const adList = this.props.allAds.map((item) => {
                return <Ad item={item} /> 
        }
        )
        return (
            <div>
               {/* <Container> */}
                <SearchBar allDogs={this.props.allDogs}/>
               {/* </Container> */}
               <Container>
                   <Row>
                        {adoptArr}
                   </Row>
               </Container>
            </div>
        )
    }
}

export default HomePage;
