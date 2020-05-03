import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const Maps = () => {
  const longitud = -86.288773;
  const latitud = 12.155481;
  const position = [latitud, longitud];
  return (
  
    <Map center={position} zoom={17} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
        Centro Educativo Planeta Verde
          <br />
          Barrio Santa Ana, del arbolito 1c oeste, 2 1/2c sur
        </Popup>
      </Marker>
    </Map>
    
  );
};

export default Maps;
