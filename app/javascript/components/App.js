import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import LocationIndex from './pages/Locations/LocationIndex'
import LocationShow from './pages/Locations/LocationShow'
import LocationNew from './pages/Locations/LocationNew'
import LocationEdit from './pages/Locations/LocationEdit'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

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

export default App