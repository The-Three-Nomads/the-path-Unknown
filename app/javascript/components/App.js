import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <h1>hello</h1>
      </>
    )
  }
}

export default App;
