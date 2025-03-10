import requests
import json

response = requests.get("https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow")
print(response.status_code)
print(response.json()["items"][0]["title"])
for question in response.json()["items"]:
    print(question["title"])