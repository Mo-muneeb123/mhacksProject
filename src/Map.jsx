import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
    return (
      <>
      <div id ='map'>
      <div className ='container'>
        <h1 className ='sub-title'>Live Sentiment Map</h1>
        <div className="map-cointainer"></div>
      </div>
      </div>

        <MapContainer center={[37.8, -96]} zoom={4} scrollWheelZoom={true} style={{ height: '100vh', width: '100%', paddingLeft: '30px' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[37.8, -96]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
      </>
      
    );
};

export default Map;
