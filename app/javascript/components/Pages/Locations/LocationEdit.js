import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button, CardTitle } from "reactstrap";
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
        <CardTitle><center><h4 className="page-title">Update Path</h4></center></CardTitle>
        <Form className="formWrapper">
          <FormGroup className="formGroup">
            <Label className="label" for="street">Street:</Label>
            <Input
              className="formGroup-input"
              value={this.state.street}
              type="text"
              name="street"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="formGroup">
            <Label className="label" for="city">City:</Label>
            <Input
              className="formGroup-input"
              value={this.state.city}
              type="text"
              name="city"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="formGroup">
            <Label className="label" for="state">State:</Label>
            <Input
              className="formGroup-input"
              value={this.state.state}
              type="text"
              name="state"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="formGroup">
            <Label className="label" for="description">Description:</Label>
            <Input
              className="formGroup-input"
              value={this.state.description}
              type="text"
              name="description"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="formGroup">
            <Label className="label" for="fee">Fee:</Label>
            <Input
              className="formGroup-input"
              value={this.state.fee}
              type="text"
              name="fee"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="formGroup">
            <Label className="label" for="coordinates">Coordinates:</Label>
            <Input
              className="formGroup-input"
              value={this.state.coordinates}
              type="text"
              name="coordinates"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="formGroup">
            <Label className="label" for="image">Image URL:</Label>
            <Input
              className="formGroup-input"
              value={this.state.image}
              type="text"
              name="image"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="formGroup">
            <Label className="label" for="link">Link to Website:</Label>
            <Input
              className="formGroup-input"
              value={this.state.link}
              type="text"
              name="link"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="formGroup">
            <Label className="label" for="review">Review:</Label>
            <Input
              className="formGroup-input"
              value={this.state.review}
              type="text"
              name="review"
              onChange={this.handleChange}
            />
          </FormGroup>
        <Button className="submitButton" onClick={this.handleSubmit} name="submit">
          Submit
        </Button>
        </Form>
        {this.state.submitted && <Redirect to="/userlocation" />}
      </>
    );
  }
}

export default LocationEdit;
