import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./pages/Home";
import LocationEdit from "./pages/Locations/LocationEdit";
import LocationIndex from "./pages/Locations/LocationIndex";
import LocationNew from "./pages/Locations/LocationNew";
import LocationShow from "./pages/Locations/LocationShow";
import NotFound from "./pages/NotFound";
import UserLocation from "./pages/Locations/UserLocation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
    };
  }

  componentDidMount() {
    this.readlocation();
  }

  readlocation = () => {
    fetch("/locations")
      .then((response) => response.json())
      .then((payload) => this.setState({ locations: payload }))
      .catch((errors) => console.log("locations read error: ", errors));
  };

  render() {
    const {
      logged_in,
      current_user,
    } = this.props;

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
                return <UserLocation userLocations={userLocations} />;
              }}
            />
          )}
        </Switch>
      </Router>
    );
  }
}

export default App;
