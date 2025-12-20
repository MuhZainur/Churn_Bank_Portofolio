
from fastapi.testclient import TestClient
from main import app
import os
import joblib

client = TestClient(app)

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Lloyds Churn API is Running", "docs": "/docs"}

def test_predict_churn_api():
    # Payload matching ChurnInput schema
    payload = {
        "Age": 45,
        "AmountSpent": 120.50,
        "Gender": "F",
        "IncomeLevel": "High",
        "MaritalStatus": "Married",
        "ProductCategory": "Electronics",
        "InteractionType": "Inquiry",
        "ServiceUsage": "Website"
    }
    
    response = client.post("/predict/churn", json=payload)
    
    # Check status
    assert response.status_code == 200, f"Failed: {response.text}"
    
    data = response.json()
    print(f"\nResponse: {data}")
    
    # Check keys
    assert "prediction" in data
    assert "probability" in data
    assert "risk_level" in data
    
    # Check logic (probability should be float between 0 and 1)
    assert 0 <= data["probability"] <= 1

if __name__ == "__main__":
    # Ensure we are in the right directory for model loading
    if not os.path.exists("lloyds_churn_model.pkl"):
        print("WARNING: Model file not found in current dir. Test might fail if app can't load it.")
    
    try:
        test_read_main()
        print("✅ Root Endpoint Test Passed")
        
        test_predict_churn_api()
        print("✅ Prediction Endpoint Test Passed")
        
    except Exception as e:
        print(f"❌ Test Failed: {e}")
