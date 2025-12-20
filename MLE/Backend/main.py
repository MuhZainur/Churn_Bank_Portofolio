
import pandas as pd
import joblib
import uvicorn
import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from schemas import ChurnInput

# Initialize App
app = FastAPI(
    title="Lloyds Banking Group - Churn Prediction API",
    description="Enterprise API for predicting customer churn risk.",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global Model
churn_model = None

@app.on_event("startup")
def load_models():
    global churn_model
    try:
        import sklearn
        print(f"DEBUG: Current directory: {os.getcwd()}")
        print(f"DEBUG: Files: {os.listdir('.')}")
        print(f"DEBUG: Sklearn Version: {sklearn.__version__}")
        
        model_path = "lloyds_churn_model.pkl"
        if os.path.exists(model_path):
            churn_model = joblib.load(model_path)
            print(f"✅ Model loaded from {model_path}")
        else:
            print(f"❌ Model not found at {model_path}")
    except Exception as e:
        print(f"🔥 Error loading model: {e}")
        import traceback
        traceback.print_exc()

@app.get("/")
def home():
    return {"message": "Lloyds Churn API is Running", "docs": "/docs"}

@app.post("/predict/churn")
def predict_churn(data: ChurnInput):
    # Lazy Load: Try to load if not already loaded
    global churn_model
    if not churn_model:
        load_models()
        
    if not churn_model:
        raise HTTPException(status_code=503, detail="Model not loaded. Please copy .pkl to Backend folder.")
    
    try:
        input_data = data.dict()
        
        # DataFrame Construction (Must match training columns order generally not strict if named, but good practice)
        df_input = pd.DataFrame([input_data])
        
        # Predict
        prediction = churn_model.predict(df_input)[0]
        prob = churn_model.predict_proba(df_input)[0][1]
        
        return {
            "prediction": "Churn" if prediction == 1 else "Retained",
            "probability": float(prob),
            "risk_level": "Critical" if prob > 0.7 else "Warning" if prob > 0.4 else "Safe"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
