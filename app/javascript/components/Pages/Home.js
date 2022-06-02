import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import trailicon from '../assets/trailicon'
import "./../Components/navbar/Navbar.css"
import "./App.css"

 
class Home extends Component {

    render() {
        return (
            <> 
                <Container style={{ paddingTop: 100}}>
                    <Row  lg={6}>
                        <Col md={4}><img  width={625}  src={trailicon}></img></Col>
                        
                        <Col md={{ offset: 5 }}>
 
                            <h2>Path Unknown</h2><h3  className='welcome'>Welcome to the road less traveled.</h3>
                             
                            <br></br> 
                            <a href='/users/sign_up' className='navBtn'>Join Now</a>
                             
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Home;
