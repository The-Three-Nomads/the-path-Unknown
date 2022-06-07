import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button, CardTitle } from "reactstrap";
import { Redirect } from "react-router-dom";

class LocationEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      street: "",
      city: "",
      state: "",
      description: "",
      fee: "",
      latitude: "",
      longitude: "",
      image: "",
      link: "",
      review: "",
    };
    submitted: false;
  }

  componentDidMount(prevProps) {
    const lengthPerv = prevProps?.locations?.length;
    const lengthProps = this.props?.locations?.length;
    if (lengthPerv !== lengthProps) {
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
    this.props.updateLocation(this.state, this.state.id);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <CardTitle>
          <center>
            <h4 className="page-title">Update Path</h4>
          </center>
        </CardTitle>
        <Form className="formWrapper">
          <FormGroup className="formGroup1">
            <Label className="label1" for="name">
              Name:
            </Label>
            <Input
              className="formGroup-input1"
              value={this.state.name}
              type="text"
              name="name"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="formGroup1">
            <Label className="label1" for="street">
              Street:
            </Label>
            <Input
              className="formGroup-input1"
              value={this.state.street}
              type="text"
              name="street"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="formGroup1">
            <Label className="label1" for="city">
              City:
            </Label>
            <Input
              className="formGroup-input1"
              value={this.state.city}
              type="text"
              name="city"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="formGroup1">
            <Label className="label1" for="state">
              State:
            </Label>
            <Input
              className="formGroup-input1"
              value={this.state.state}
              type="text"
              name="state"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="formGroup1">
            <Label className="label1" for="description">
              Description:
            </Label>
            <Input
              className="formGroup-input1"
              value={this.state.description}
              type="text"
              name="description"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="formGroup1">
            <Label className="label1" for="fee">
              Fee:
            </Label>
            <Input
              className="formGroup-input1"
              value={this.state.fee}
              type="text"
              name="fee"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="formGroup1">
            <Label className="label1" for="latitude">
              Latitude:
            </Label>
            <Input
              className="formGroup-input1"
              value={this.state.latitude}
              type="text"
              name="latitude"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="formGroup1">
            <Label className="label1" for="longitude">
              Longitude:
            </Label>
            <Input
              className="formGroup-input1"
              value={this.state.longitude}
              type="text"
              name="longitude"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="formGroup1">
            <Label className="label1" for="image">
              Image URL:
            </Label>
            <Input
              className="formGroup-input1"
              value={this.state.image}
              type="text"
              name="image"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="formGroup1">
            <Label className="label1" for="link">
              Link to Website:
            </Label>
            <Input
              className="formGroup-input1"
              value={this.state.link}
              type="text"
              name="link"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="formGroup1">
            <Label className="label1" for="review">
              Review:
            </Label>
            <Input
              className="formGroup-input1"
              value={this.state.review}
              type="text"
              name="review"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            className="submitButton"
            onClick={this.handleSubmit}
            name="submit"
          >
            Submit
          </Button>
        </Form>
        {this.state.submitted && <Redirect to="/userlocation" />}
      </>
    );
  }
}

export default LocationEdit;
