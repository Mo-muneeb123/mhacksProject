import requests

userInput = input("Enter the City Name: ")

url = 'https://magicloops.dev/api/loop/run/2393f643-8919-4662-b196-386f92c3ddca'
payload = { 'input': userInput }             # Changing to a user input

response = requests.get(url, json=payload)
responseJson = response.json()
print(f"STATUS: {responseJson['status']}")
print(f"OUTPUT: {responseJson['loopOutput']}")

# Second API

url = 'https://magicloops.dev/api/loop/run/6d8f55bf-00d4-429a-8e81-3452b99d22c5'
payload = { 'input': userInput }

response = requests.get(url, json=payload)
responseJson = response.json()
print(f"STATUS: {responseJson['status']}")
print(f"OUTPUT: {responseJson['loopOutput']}")























