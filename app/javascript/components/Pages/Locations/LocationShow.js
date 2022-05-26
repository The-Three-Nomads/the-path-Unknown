import React, { Component } from 'react';

class LocationShow extends Component {
    render() {
        let { location } = this.props
        return (
            <>
                <h1>Find Your Next Path</h1>
                <img src={location && location.image} alt="rep" width="600px" />
                <p>This lovely location is located at {location && location.street}, {location && location.city} {location && location.state}.</p>
            </>
        );
    }
}

export default LocationShow;
