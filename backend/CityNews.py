import requests

userInput = input("Enter the City Name: ")

url = 'https://magicloops.dev/api/loop/run/2393f643-8919-4662-b196-386f92c3ddca'
payload = { 'input': userInput }             # Changing to a user input

response = requests.get(url, json=payload)
responseJson = response.json()
print(f"STATUS: {responseJson['status']}")
print(f"OUTPUT: {responseJson['loopOutput']}")


