import requests
import json

url = "https://letters-to-shyama-ju-backend.onrender.com/letters"
payload = {"content": "Test letter from debugger"}
headers = {"Content-Type": "application/json"}

try:
    response = requests.post(url, json=payload, headers=headers)
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
except Exception as e:
    print(f"Error: {e}")
