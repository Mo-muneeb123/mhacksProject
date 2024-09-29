import requests

import folium
from folium.plugins import HeatMap
import random

import json

userInput = input("Enter the City Name: ")

url = 'https://magicloops.dev/api/loop/run/2393f643-8919-4662-b196-386f92c3ddca'
payload = { 'input': userInput }             # Changing to a user input

response = requests.get(url, json=payload)
responseJson = response.json()
print(f"STATUS: {responseJson['status']}")
print(f"OUTPUT: {responseJson['loopOutput']}")
jsonObjArray= responseJson['loopOutput']

posCount = len(jsonObjArray['positive'])
neuCount = len(jsonObjArray['neutral'])
negCount = len(jsonObjArray['negative'])
print(posCount,negCount,neuCount)

# Second API

url = 'https://magicloops.dev/api/loop/run/6d8f55bf-00d4-429a-8e81-3452b99d22c5'
payload = { 'input': userInput }

response = requests.get(url, json=payload)
responseJson = response.json()
print(f"STATUS: {responseJson['status']}")
print(f"OUTPUT: {responseJson['loopOutput']}")

jsonObj = responseJson['loopOutput']


print(jsonObj["longitude"], jsonObj["latitude"])




# Sample data for the heatmap (latitude, longitude, and headline density)
heat_map_data = [
    [37.7749, -122.4194, 10]
]

# Create a base map
base_map = folium.Map(location=[37.0902, -95.7129], zoom_start=4)

# Add heatmap to the base map
heat = HeatMap(heat_map_data).add_to(base_map)

# Function to select a random event and center the map on it
def go_to_random_event():
    # Choose a random event from the data
    random_event = random.choice(heat_map_data)
    lat, lng = random_event[0], random_event[1]
    
    # Create a new map centered on the random location
    random_map = folium.Map(location=[lat, lng], zoom_start=10)
    
    # Add heatmap to the new map as well
    HeatMap(heat_map_data).add_to(random_map)
    
    # Save the map to an HTML file
    random_map.save("random_event_map.html")
    print(f"Map centered at random event location: ({lat}, {lng})")

# Call the function to select a random event and generate the map
go_to_random_event()
























