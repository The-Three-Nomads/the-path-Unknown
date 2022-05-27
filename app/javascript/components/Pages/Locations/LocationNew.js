import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class LocationNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newLocation: {
        street: "",
        city: "",
        state: "",
        description: "",
        fee: "",
        coordinates: "",
        image: "",
        link: "",
        review: "",
        user_id: this.props.current_user.id,
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    const { newLocation } = this.state;
    newLocation[e.target.name] = e.target.value;
    this.setState({ newLocation: newLocation });
  };

  handleSubmit = () => {
    this.props.createLocation(this.state.newLocation);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <h1>Create a New Location</h1>
        <Form>
          <FormGroup>
            <Label for="street">Street</Label>
            <Input type="text" name="street" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input type="text" name="city" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="state">State</Label>
            <Input type="text" name="state" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="text"
              name="description"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="fee">Fee</Label>
            <Input type="text" name="fee" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="coordinates">Coordinates</Label>
            <Input
              type="text"
              name="coordinates"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Image URL</Label>
            <Input type="text" name="image" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="link">Link to Website</Label>
            <Input type="text" name="link" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="review">Review</Label>
            <Input type="text" name="review" onChange={this.handleChange} />
          </FormGroup>
        </Form>
        <Button onClick={this.handleSubmit} name="submit">
          Submit Location
        </Button>
        {this.state.submitted && <Redirect to="/locationindex" />}
      </>
    );
  }
}

export default LocationNew;
