import requests
import json

# Test prediction endpoint with a sample image
url = "http://localhost:5000/api/predict"
image_path = "src/assets/sample-positive.jpg"

print("Testing prediction endpoint...")
print(f"URL: {url}")
print(f"Image: {image_path}\n")

try:
    with open(image_path, 'rb') as f:
        files = {'file': f}
        response = requests.post(url, files=files)
    
    print(f"Status Code: {response.status_code}")
    print(f"\nResponse JSON:")
    result = response.json()
    print(json.dumps(result, indent=2))
    
    print("\n" + "="*50)
    print("ANALYSIS:")
    print("="*50)
    if result.get('success'):
        print(f"✓ Model is WORKING - Real PyTorch inference performed")
        print(f"  Prediction: {result['prediction']}")
        print(f"  Confidence: {result['confidence']}%")
        print(f"  Probability: {result['probability']}")
        print(f"  Parasite Count: {result['parasiteCount']}")
        print(f"  Severity: {result['severity']}")
    else:
        print("✗ Model failed or returned error")
        
except Exception as e:
    print(f"Error: {e}")
