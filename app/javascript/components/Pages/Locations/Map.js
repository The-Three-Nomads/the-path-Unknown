import React from "react";
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from "react-icons/fa";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map(){
  const defaultProps = {
    center: {
      lat: +((window.location.href).substring((window.location.href).indexOf('!')+1, (window.location.href).indexOf('?'))),
      lng: +((window.location.href).substring((window.location.href).indexOf('?')+1, (window.location.href).indexOf('$')))
    },
    zoom: 11
  };
  
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent className='pin'
          lat= {defaultProps.center.lat}
          lng= {defaultProps.center.lng}
          text="📍"
        />
      </GoogleMapReact>
    </div>
  );
}