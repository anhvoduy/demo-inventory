import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import fnc from '../../config/fnc';

const CustomMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 10.7715925, lng: 106.7036024 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true
      }}>
      <Marker position={{ lat: 10.7715925, lng: 106.7036024 }} />
    </GoogleMap>
  ))
);

function Maps({ ...prop }) {
  return (
    <CustomMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${fnc.google_api_key}`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default Maps;