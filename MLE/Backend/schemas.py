
from pydantic import BaseModel

class ChurnInput(BaseModel):
    # Numeric Features
    Age: int
    AmountSpent: float
    
    # Categorical Features
    Gender: str
    IncomeLevel: str
    MaritalStatus: str
    ProductCategory: str
    # InteractionType Removed
    ServiceUsage: str
    
    class Config:
        json_schema_extra = {
            "example": {
                "Age": 30,
                "AmountSpent": 500.0,
                "Gender": "M",
                "IncomeLevel": "Medium",
                "MaritalStatus": "Single",
                "ProductCategory": "Electronics",
                "ServiceUsage": "Mobile App"
            }
        }
