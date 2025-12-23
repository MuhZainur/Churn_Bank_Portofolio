
from pydantic import BaseModel

class ChurnInput(BaseModel):
    # Numeric Features
    Age: int
    AmountSpent: float
    LoginFrequency: int  # Restore this as it's in the model
    
    # Categorical Features
    Gender: str
    IncomeLevel: str
    MaritalStatus: str
    ProductCategory: str
    InteractionType: str # Restore this
    ResolutionStatus: str # Restore this
    ServiceUsage: str
    
    class Config:
        json_schema_extra = {
            "example": {
                "Age": 30,
                "AmountSpent": 500.0,
                "LoginFrequency": 5,
                "Gender": "M",
                "IncomeLevel": "Medium",
                "MaritalStatus": "Single",
                "ProductCategory": "Electronics",
                "InteractionType": "Inquiry",
                "ResolutionStatus": "Resolved",
                "ServiceUsage": "Mobile App"
            }
        }
