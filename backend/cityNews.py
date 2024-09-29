from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import requests
import folium
from folium.plugins import HeatMap
import random

app = Flask(__name__)
CORS(app)  # Enable CORS for the whole app

# Function to generate random event map
def go_to_random_event(heat_map_data):
    # Choose a random event from the data
    random_event = random.choice(heat_map_data)
    lat, lng = random_event[0], random_event[1]
    
    # Create a new map centered on the random location
    random_map = folium.Map(location=[lat, lng], zoom_start=10)
    
    # Add heatmap to the new map as well
    HeatMap(heat_map_data).add_to(random_map)
    
    # Save the map to an HTML file
    map_file = f"random_event_map.html"
    random_map.save(map_file)
    return map_file

@app.route('/api/generate_html', methods=['POST'])
def generate_html():
    data = request.get_json()
    userInput = data.get('savedSearch')  # Get the savedSearch value from request

    # API requests to get sentiment data and coordinates
    url = 'https://magicloops.dev/api/loop/run/2393f643-8919-4662-b196-386f92c3ddca'
    payload = { 'input': userInput }  
    response = requests.get(url, json=payload)
    responseJson = response.json()
    print(f"STATUS: {responseJson['status']}")
    print(f"OUTPUT: {responseJson['loopOutput']}")
    jsonObjArray= responseJson['loopOutput']

    posCount = len(jsonObjArray['positive'])
    neuCount = len(jsonObjArray['neutral'])
    negCount = len(jsonObjArray['negative'])
    density = ((posCount + negCount + neuCount) / 3) * 100

    # Second API to get lat and long
    url = 'https://magicloops.dev/api/loop/run/6d8f55bf-00d4-429a-8e81-3452b99d22c5'
    payload = { 'input': userInput }

    response = requests.get(url, json=payload)
    responseJson = response.json()
    print(f"STATUS: {responseJson['status']}")
    print(f"OUTPUT: {responseJson['loopOutput']}")

    jsonObj = responseJson['loopOutput']

    long = jsonObj["longitude"]
    lat = jsonObj["latitude"]
    # Heatmap data for the location
    heat_map_data = [[lat, long, density]]

    # Generate the random event map and save the HTML file
    html_file = go_to_random_event(heat_map_data)

    return jsonify({'htmlPath': html_file})  # Return the path of the generated HTML

if __name__ == '__main__':
    app.run(debug=True)
