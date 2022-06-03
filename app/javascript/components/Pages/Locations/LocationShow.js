import React, { Component } from 'react';
import { Card, CardTitle, Col, CardImg, Button, Row, Container } from 'reactstrap'
// import "../../../../assets/stylesheets/App.css"

class LocationShow extends Component {
    render() {
        let { location } = this.props
        return (
            <>
                <CardTitle>
                    <h4 className='page-title'>Find Your Next Path</h4>
                </CardTitle>
                <Container>
                    <Row lg={6}>
                        <br></br><br></br>
                        <Col md={4}>
                            <img src={location && location.image} alt="rep" style={{paddingTop: '20px'}} width="600px" />
                        </Col>
                        <Col md={{ offset: 4 }}>
                            <div className="path-list-text">
                            <ul className="path-list">
                                <li><split>Street:</split> {location && location.street}</li>
                                <li><split>City:</split> {location && location.city}</li>
                                <li><split>State:</split> {location && location.state}</li>
                                <li><split>Fee:</split> {location && location.fee}</li>
                                <li><split>Coordinates:</split> {location && location.coordinates}</li>
                                <li><split>Description:</split> {location && location.description}</li>
                                <li><split>Review:</split> {location && location.review}</li>
                                <li><split>Link to Website:</split> {location && location.link}</li>
                            </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default LocationShow;
