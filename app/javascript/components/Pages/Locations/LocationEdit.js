import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class LocationEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      street: "",
      city: "",
      state: "",
      description: "",
      fee: "",
      coordinates: "",
      image: "",
      link: "",
      review: "",
    };
    submitted: false;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locations.length !== this.props.locations.length) {
      const location = this.props.locations.filter((location) => {
        return location.id.toString() === this.props.match.params.id;
      });

      this.setState({
        ...this.state,
        ...location[0],
      });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    this.props.updateLocation(this.state, this.state.id)
    this.setState({submitted: true});
  };

  render() {
    return (
      <>
        <h1>Edit Location</h1>
        <Form>
          <FormGroup>
            <Label for="street">Street</Label>
            <Input
              value={this.state.street}
              type="text"
              name="street"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              value={this.state.city}
              type="text"
              name="city"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="state">State</Label>
            <Input
              value={this.state.state}
              type="text"
              name="state"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              value={this.state.description}
              type="text"
              name="description"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="fee">Fee</Label>
            <Input
              value={this.state.fee}
              type="text"
              name="fee"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="coordinates">Coordinates</Label>
            <Input
              value={this.state.coordinates}
              type="text"
              name="coordinates"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image URL</Label>
            <Input
              value={this.state.image}
              type="text"
              name="image"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="link">Link to Website</Label>
            <Input
              value={this.state.link}
              type="text"
              name="link"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="review">Review</Label>
            <Input
              value={this.state.review}
              type="text"
              name="review"
              onChange={this.handleChange}
            />
          </FormGroup>
        </Form>
        <Button onClick={this.handleSubmit} name="submit">
          Submit Update
        </Button>
        {this.state.submitted && <Redirect to="/userlocation" />}
      </>
    );
  }
}

export default LocationEdit;
