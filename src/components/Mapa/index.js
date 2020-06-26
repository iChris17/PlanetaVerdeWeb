import React, { Fragment } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Label } from "reactstrap";


const Maps = () => {
  const longitud = -86.288773;
  const latitud = 12.155481;
  const position = [latitud, longitud];
  return (
    <Map center={position} zoom={16}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          <Fragment>
            <h4 className="text-center">Centro Educativo Planeta Verde</h4>
            <hr></hr>
            <Label className="mt-2">
              <strong>Direccion: </strong>Barrio Santa Ana, del arbolito 1c
              oeste, 2 1/2c sur
            </Label>
          </Fragment>
        </Popup>
      </Marker>
    </Map>
  );
};

export default Maps;
