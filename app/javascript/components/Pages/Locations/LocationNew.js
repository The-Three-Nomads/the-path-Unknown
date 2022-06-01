import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button, CardTitle } from "reactstrap";
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
        <CardTitle><center><h4 className="page-title">Create a New Path</h4></center></CardTitle>
        <div className="centeredForm">
        <Form className="formWrapper">
          <FormGroup className="formGroup">
            <Label className="label" for="street">Street:</Label>
            <Input className="formGroup-input" type="text" name="street" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup className="formGroup">
            <Label className="label" for="city">City:</Label>
            <Input className="formGroup-input" type="text" name="city" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup className="formGroup">
            <Label className="label" for="state">State:</Label>
            <Input className="formGroup-input" type="text" name="state" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup className="formGroup">
            <Label className="label" for="description">Description:</Label>
            <Input
              className="formGroup-input"
              type="text"
              name="description"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="formGroup">
            <Label className="label" for="fee">Fee:</Label>
            <Input className="formGroup-input" type="text" name="fee" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup className="formGroup">
            <Label className="label" for="coordinates">Coordinates:</Label>
            <Input
              className="formGroup-input"
              type="text"
              name="coordinates"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="formGroup">
            <Label className="label" for="image">Image URL:</Label>
            <Input className="formGroup-input" type="text" name="image" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup className="formGroup">
            <Label className="label" for="link">Link to Website:</Label>
            <Input className="formGroup-input" type="text" name="link" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup className="formGroup">
            <Label className="label" for="review">Review:</Label>
            <Input className="formGroup-input" type="text" name="review" onChange={this.handleChange} />
          </FormGroup>
        <Button className="submitButton" onClick={this.handleSubmit} name="submit">
          Submit
        </Button>
        </Form>
        </div>
        {this.state.submitted && <Redirect to="/locationindex" />}
   
      </>
    );
  }
}

export default LocationNew;
