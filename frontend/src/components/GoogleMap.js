// src/components/GoogleMap.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMapComponent = () => {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  // Define the initial center of the map
  const center = {
    lat: 51.505,  // Latitude
    lng: -0.09,   // Longitude
  };

  // Optional: Define markers to be shown on the map
  const markers = [
    { lat: 51.505, lng: -0.09, label: "Marker 1" },
    { lat: 51.515, lng: -0.1, label: "Marker 2" },
    { lat: 51.525, lng: -0.11, label: "Marker 3" }
  ];

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        {/* Map markers */}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            title={marker.label}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
