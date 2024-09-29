import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const MapUpdater = ({ coordinates, zoom }) => {
    const map = useMap(); 
    React.useEffect(() => {
      if (coordinates) {
        console.log("Updating map view to:", coordinates, "with zoom level:", zoom);
        map.setView(coordinates, zoom); 
      }
    }, [coordinates, zoom, map]); 
  
    return null;
  };
  

const Map = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [coordinates, setCoordinates] = useState([37.8, -96]); 
    const [zoom, setZoom] = useState(4);  
    const [savedSearch, setSavedSearch] = useState('');

    const styles = {
      container: {
          textAlign: 'center',
          padding: '20px',
          alignItems: 'center',
      },
      form: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    },
      input: {
          padding: '15px 20px',
          width: '300px',
          fontSize: '20px',
          border: '2px solid #ccc',
          borderRadius: '5px',
          marginRight: '10px',
      },
      button: {
          padding: '15px 20px',
          fontSize: '20px',
          borderRadius: '5px',
          backgroundColor: '#197c28',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          height: '55px',
          display: 'inline-block',

      },
      savedSearch: {
          marginTop: '20px',
          color: '#333',
      }
  };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!searchTerm) return;
      
        console.log('Search Term:', searchTerm); 
        setSavedSearch(searchTerm);
      
        try {
          // Send savedSearch as userInput to the backend API
          const response = await fetch('http://127.0.0.1:5000/api/generate_html', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ savedSearch }),
          });
      
          const data = await response.json();
          console.log('API Response:', data); 
      
          if (data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry;
            console.log('Coordinates:', lat, lng); 
            setCoordinates([lat, lng]);
            setZoom(10); 
          } else {
            console.log('Location not found.');
            alert('Location not found.');
          }
        } catch (error) {
          console.error('Error fetching geocoding data:', error);
          alert('Failed to search for location.');
        }
      
        setSearchTerm(''); 
      };

    return (
        <div style={{ textAlign: 'center' }}>
          <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Enter State/City in the USA"
              value={searchTerm}
              onChange={handleInputChange}
              style={styles.input}
            />
            <button type="submit" style={styles.button}>Search</button>
          </form>
    
          {savedSearch && (
            <div>
              <h3>Saved Search:</h3>
              <p>{savedSearch}</p>
            </div>
          )}
    
          <MapContainer
            center={coordinates}
            zoom={zoom}
            scrollWheelZoom={true}
            style={{ height: '80vh', width: '90%', margin: '0 auto' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={coordinates}>
              <Popup>{savedSearch}</Popup>
            </Marker>
    
            <MapUpdater coordinates={coordinates} zoom={zoom} />
          </MapContainer>
        </div>
      );
};

export default Map;


