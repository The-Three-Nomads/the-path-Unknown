import React, { Component } from "react";
import { CardTitle, Col, Row, Container } from 'reactstrap'
import { NavLink } from "react-router-dom";

export default class LocationIndex extends Component {
  render() {
    return (
      <>
        <CardTitle><center><h4 className="page-title">All Locations</h4></center></CardTitle>
        <Container className="cardWrapper">
          <center>
            <Row> {this.props.locations &&
              this.props.locations.map((location) => {
                return (
                  <Col sm="4" xs="6" key={location.id}>
                    <NavLink to={`/locationshow/${location.id}`} key={location.id}>
                      <CardTitle className="grow">
                        <h4>{location.name}</h4>
                        <h4>{location.city}</h4>
                        <h4>{location.state}</h4>
                        <img src={location.image} width="300px" />
                      </CardTitle>
                    </NavLink>
                  </Col>
                );
              })}
            </Row>
          </center>
        </Container>
      </>
    );
  }
}
