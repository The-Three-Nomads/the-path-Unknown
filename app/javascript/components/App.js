import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import LocationEdit from './pages/Locations/LocationEdit'
import LocationIndex from './pages/Locations/LocationIndex'
import LocationNew from './pages/Locations/LocationNew'
import LocationShow from './pages/Locations/LocationShow'
import NotFound from './pages/NotFound'

class App extends Component {

  render() {
    return (
      
        <Router>
          <Header {...this.props} />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
    )
  }
}

export default App;
