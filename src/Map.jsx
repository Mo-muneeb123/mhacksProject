import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';


const Map = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [savedSearch, setSavedSearch] = useState('');

    const styles = {
      container: {
          textAlign: 'center',
          padding: '20px',
      },
      input: {
          padding: '10px',
          width: '250px',
          border: '2px solid #ccc',
          borderRadius: '5px',
          marginRight: '10px',
          display: 'flex', 
          justifyContent: "center",
          alignItems: 'center'

      },
      button: {
          padding: '10px 15px',
          borderRadius: '5px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: "center",
          alignItems: 'center'

      },
      savedSearch: {
          marginTop: '20px',
          color: '#333',
      }
  };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSavedSearch(searchTerm); 
        setSearchTerm(''); 
    };

    useEffect(() => {
        if (searchTerm !== '') {
            console.log(`Current search term: ${searchTerm}`);
           
        }
    }, [searchTerm]);

    return (
      <>
      <div id ='map'>
      <div className ='container'>
        <h1 className ='sub-title'>Live Sentiment Map</h1>
        <div className="map-cointainer"></div>
      </div>
      </div>

      <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a Valid State/City Name in the USA"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>
            {savedSearch && (
                <div>
                    <h3>Saved Search:</h3>
                    <p>{savedSearch}</p>
                </div>
            )}
        </div>

      

        <MapContainer  center={[37.8, -96]} zoom={4} scrollWheelZoom={true} style={{ height: '80vh', width: '90%',
            display:'flex', justifyContent:'center', alignItems:'center', margin: '0 auto' }} >
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
