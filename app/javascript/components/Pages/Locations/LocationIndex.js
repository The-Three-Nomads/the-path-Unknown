import React, { Component } from "react";
import { Card, CardTitle, Col } from "reactstrap";
import { NavLink } from "react-router-dom";

export default class LocationIndex extends Component {
  render() {
    return (
      <>
        <h3>View a list of all available locations</h3>

        <Col sm="6">
          {this.props.locations &&
            this.props.locations.map((location) => {
              return (
                <NavLink to={`/locationshow/${location.id}`} key={location.id}>
                  <CardTitle>
                    <h4>{location.city}</h4>
                    <h4>{location.state}</h4>
                    <img src={location.image} width="200px" />
                  </CardTitle>
                </NavLink>
              );
            })}
        </Col>
      </>
    );
  }
}
