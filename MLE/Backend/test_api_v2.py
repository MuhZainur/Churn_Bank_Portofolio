
from fastapi.testclient import TestClient
from main import app
import os

def test_churn_flow():
    with TestClient(app) as client:
        # Check Root
        response = client.get("/")
        assert response.status_code == 200
        print("✅ Root Endpoint: OK")

        # Check Prediction (UPDATED PAYLOAD MATCHING PYCARET MODEL)
        payload = {
            "Age": 45,
            "AmountSpent": 120.50,
            "LoginFrequency": 10,
            "Gender": "F",
            "IncomeLevel": "High",
            "MaritalStatus": "Married",
            "ProductCategory": "Electronics",
            "InteractionType": "Inquiry",
            "ResolutionStatus": "Resolved",
            "ServiceUsage": "Website"
        }
        
        response = client.post("/predict/churn", json=payload)
        
        if response.status_code != 200:
            print(f"❌ Prediction Failed: {response.text}")
        
        assert response.status_code == 200
        data = response.json()
        print(f"✅ Prediction Response: {data}")
        
        assert data["probability"] >= 0

if __name__ == "__main__":
    if not os.path.exists("lloyds_churn_model.pkl"):
        print("WARNING: Model file missing!")
        
    try:
        test_churn_flow()
        print("\n🎉 ALL TESTS PASSED.")
    except Exception as e:
        print(f"\n❌ TEST SUITE FAILED: {e}")
