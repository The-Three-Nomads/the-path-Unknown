import React, { Component } from 'react';
import { Card, CardTitle, Col, CardImg, Button, Row, Container } from 'reactstrap'
import "./../App.css"

class LocationShow extends Component {
    render() {
        let { location } = this.props
        return (
            <>
                <CardTitle><h4 className='page-title'>Find Your Next Path</h4></CardTitle>
                <Container>
                    <br></br><br></br>
                    <CardTitle>
                        <center><img src={location && location.image} alt="rep" width="600px" />
                        <br></br><br></br>
                        <h4>This lovely location is located at {location && location.street}, {location && location.city} {location && location.state}.</h4> </center>
                    </CardTitle>
                </Container>
            </>
        );
    }
}

export default LocationShow;
