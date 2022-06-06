import React, { Component } from 'react';
import { Card, CardTitle, Col, CardImg, Button, Row, Container } from 'reactstrap';
import { NavLink } from "react-router-dom";

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
                                <li><span>Name:</span> {location && location.name}</li>
                                <li><span>Street:</span> {location && location.street}</li>
                                <li><span>City:</span> {location && location.city}</li>
                                <li><span>State:</span> {location && location.state}</li>
                                <li><span>Fee:</span> {location && location.fee}</li>
                                <li><span>Latitude:</span> {location && location.latitude}</li>
                                <li><span>Longitude:</span> {location && location.longitude}</li>
                                <li><span>Description:</span> {location && location.description}</li>
                                <li><span>Review:</span> {location && location.review}</li>
                                <li><span>Link to Website:</span> {location && location.link}</li>
                            </ul>
                                <NavLink
                                    to={`/map/!${location?.latitude}?${location?.longitude}$`}
                                    className="navBtn"
                                    location={location}
                                >Map
                                </NavLink>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default LocationShow;
