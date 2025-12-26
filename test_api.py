import requests

# Test the prediction endpoint
url = "http://localhost:5000/api/predict"
image_path = "src/assets/sample-positive.jpg"

with open(image_path, 'rb') as f:
    files = {'file': f}
    response = requests.post(url, files=files)
    
print("Status Code:", response.status_code)
print("Response:", response.json())
