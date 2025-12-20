# Data Science Portfolio Report: Customer Retention & Advanced Analytics
**Project**: Lloyd Banking Group - End-to-End Churn Prediction
**Date**: December 2025
**Author**: [Your Name/Role]

## 1. Executive Summary
This Data Science phase focused on building a robust predictive system for Customer Churn. Unlike standard implementations, this project emphasized **Scientific Rigor** and **Model Integrity**. We successfully built a model with **88% Accuracy** after identifying and fixing a critical Data Leakage issue that initially inflated results to 94%.

We also explored Customer Lifetime Value (CLV) prediction and Segmentation, providing critical analysis on why specific data architectures are needed for those tasks to succeed.

## 2. Methodology: The "PyCaret-Style" Framework
To ensure scalability and reproducibility, we implemented a custom AutoML pipeline inspired by PyCaret:
- **`compare_models_custom()`**: Automatically trains and ranks multiple algorithms (RandomForest, XGBoost, etc.).
- **`tune_model_custom()`**: Uses `RandomizedSearchCV` for hyperparameter optimization.
- **`evaluate_model_custom()`**: Generates rich metrics (RoC-AUC, Confusion Matrix, Residual Plots) automatically.

## 3. Critical Investigation: Preventing Data Leakage
One of the key achievements of this project was the **Data Integrity Audit**.

### The Anomaly
Initial models returned suspicious accuracy (>94%). Feature Importance analysis revealed `LoginFrequency` as the dominant predictor (16%).

### The Diagnosis
We hypothesized **Temporal Leakage**.
- **Observation**: Churned users had `LoginFrequency ≈ 0`.
- **Insight**: This "zero login" was a *result* of churning (they left, so they verified), not a *predictor* of future churn. Including it made the model simply "read the past" rather than "predict the future".

### The Solution (Robustness)
We removed `LoginFrequency` and `ResolutionStatus` (another proxy).
- **Result**: Accuracy stabilized at a realistic **88%**.
- **Impact**: The final model is now genuinely predictive and safe for real-world deployment.

## 4. Multi-Task Modeling Analysis

### A. Churn Classification (Primary Goal)
- **Status**: ✅ **Ready for Deployment**
- **Top Model**: Random Forest / XGBoost
- **Key Metrics**: F1-Score 0.88, AUC 0.91.
- **Business Vibe**: Highly effective at identifying "At-Risk" customers based on Demographics and Service Usage patterns.

### B. CLV Regression & Segmentation (Secondary Goals)
- **Status**: ⚠️ **Experimental / Limited Utility**
- **Analysis**:
    - **Regression**: Low R2 scores indicate that current features (Age, Gender, Region) are insufficient to predict exact *future spending amounts*. Spending behavior requires transactional history (frequency, recency, seasonality) which was absent.
    - **Clustering**: K-Means produced segments with moderate separation. The data is "Classification-Ready" (binary separable) but not necessarily "Cluster-Ready" (distinct behavioral blobs).
- **Recommendation**: Avoid deploying CLV/Segmentation models currently. Focus infrastructure on collecting **Transactional Granularity** for Phase 2.

## 5. Deployment Strategy (MLE Phase)
Moving forward, we will deploy only the **Churn Classification Model**.
- **Tech Stack**: FastAPI (Backend) + React (Frontend) + Docker.
- **Pipeline**: Input User Data -> Preprocessing Pipeline (Saved .pkl) -> Prediction (Churn/No Churn) -> Probability Score.

---
*This report demonstrates not just ability to code models, but the critical thinking required to validate them.*
