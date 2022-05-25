import React, { Component } from 'react';
import trailicon from '../assets/trailicon'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Path Unknown</h1>
                <h3>Welcome to the road less travelled.</h3>
                <img src={trailicon}></img>
            </div>
        );
    }s
}

export default Home;