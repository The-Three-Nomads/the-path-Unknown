import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import LocationEdit from "./Pages/Locations/LocationEdit";
import LocationIndex from "./Pages/Locations/LocationIndex";
import LocationNew from "./Pages/Locations/LocationNew";
import LocationShow from "./Pages/Locations/LocationShow";
import NotFound from "./Pages/NotFound";
import UserLocation from "./Pages/Locations/UserLocation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
    };
  }

  componentDidMount() {
    this.readLocation();
  }

  readLocation = () => {
    fetch("/locations")
      .then((response) => response.json())
      .then((payload) => this.setState({ locations: payload }))
      .catch((errors) => console.log("locations read error: ", errors));
  };

  createLocation = (newlyCreatedLocation) => {
    fetch("/locations", {
      body: JSON.stringify(newlyCreatedLocation),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => this.readLocation())
      .catch((errors) => console.log("location create error: ", errors));
  };

  updateLocation = (newLocation, id) => {
    fetch(`/locations/${id}`, {
      body: JSON.stringify(newLocation),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => this.readLocation())
      .catch((errors) => console.error("location update error: ", errors));
  };

  deleteLocation = (id) => {
    fetch(`/locations/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => {
        if (response.status == 200) {
          return this.readLocation();
        } else {
          throw new Error();
        }
      })
      .catch((errors) => console.log("delete errors:", errors));
  };

  render() {
    const { logged_in, current_user } = this.props;
    return (
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={AboutUs} />
          <Route
            path="/locationindex"
            render={(props) => (
              <LocationIndex locations={this.state.locations} />
            )}
          />
          {logged_in && (
            <Route
              path="/userlocation"
              render={(props) => {
                let userLocations = this.state.locations.filter(
                  (location) => location.user_id === current_user.id
                );
                return (
                  <UserLocation
                    deleteLocation={this.deleteLocation}
                    userLocations={userLocations}
                  />
                );
              }}
            />
          )}
          <Route
            path="/locationshow/:id"
            render={(props) => {
              let id = props.match.params.id;
              let location = this.state.locations.find(
                (location) => location.id === +id
              );
              return (
                <LocationShow
                  deleteLocation={this.deleteLocation}
                  location={location}
                />
              );
            }}
          />
          <Route
            path="/locationnew"
            render={() => (
              <LocationNew
                createLocation={this.createLocation}
                current_user={current_user}
              />
            )}
          />
          <Route
            path="/locationedit/:id"
            render={(props) => {
              return (
                <LocationEdit
                  {...props}
                  updateLocation={this.updateLocation}
                  locations={this.state.locations}
                  current_user={current_user}
                />
              );
            }}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
