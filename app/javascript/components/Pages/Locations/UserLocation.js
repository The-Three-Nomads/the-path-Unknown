import React, { Component } from "react";
import { CardTitle, Col, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

export default class LocationIndex extends Component {
  handleDelete = (id) => {
    this.props.deleteLocation(id);
  };

  render() {
    return (
      <>
        <h3>Your Path Listings</h3>

        <Col sm="6">
          {this.props.userLocations &&
            this.props.userLocations.map((location) => {
              return (
                <div key={location.id}>
                  <CardTitle>
                    <NavLink
                      to={`/locationshow/${location.id}`}
                    >
                      <h4>{location.city}</h4>
                      <h4>{location.state}</h4>
                      <img src={location.image} width="200px" />
                    </NavLink>
                  </CardTitle>
                  <Button>
                    <NavLink to={`/locationedit/${location.id}`}>
                      UPDATE
                    </NavLink>
                  </Button>
                  <NavLink to={"/userlocation"}>
                    <Button onClick={() => this.handleDelete(location.id)}>
                      DELETE
                    </Button>
                  </NavLink>
                </div>
              );
            })}
        </Col>
      </>
    );
  }
}
