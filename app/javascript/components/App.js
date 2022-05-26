import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import LocationEdit from './pages/locations/LocationEdit'
import LocationIndex from './pages/locations/LocationIndex'
import LocationNew from './pages/locations/LocationNew'
import LocationShow from './pages/locations/LocationShow'
import NotFound from './pages/NotFound'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: []
    }
  }

  componentDidMount () {
    this.readlocation()
  }

  readlocation= () => {
    fetch ("/locations")
    .then(response => response.json())
    .then(payload => this.setState({locations: payload}))
    .catch(errors => console.log('locations read error: ', errors))
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      
        <Router>
          <Header {...this.props} />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/aboutus" component={AboutUs} />
              <Route 
                path="/locationindex" 
                render = {(props) => <LocationIndex locations ={this.state.locations}/>}
              />
          </Switch>
        </Router>
    )
  }
}

export default App;
