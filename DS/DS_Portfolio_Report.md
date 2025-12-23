# Data Science Portfolio Report: Customer Retention & Advanced Analytics
**Project**: Lloyd Banking Group - End-to-End Churn Prediction
**Date**: December 2025
**Author**: [Your Name/Role]

## 1. Executive Summary
This Data Science phase focused on building a robust predictive system for Customer Churn. Unlike standard implementations, this project emphasized **Scientific Rigor** and **Model Integrity**. We successfully built a model with **88% Accuracy** after identifying and fixing a critical Data Leakage issue that initially inflated results to 94%.

We also explored Customer Lifetime Value (CLV) prediction and Segmentation, providing critical analysis on why specific data architectures are needed for those tasks to succeed.

## 2. Methodology: The "PyCaret" Framework
To ensure scalability and reproducibility, we refactored the pipeline using **PyCaret (Low-Code Library)**:
- **`setup()`**: Automated handling of **SMOTE** (Imbalance), **MinMax Scaler**, and **One-Hot Encoding** in a single function.
- **`compare_models()`**: Benchmarked 15+ algorithms. **XGBoost** consistently outperformed others (F1 ~99%), validating Tree-based models for this dataset.
- **`tune_model()`**: Deep Random Grid Search (50 Iterations) optimized the F1-Score.
- **`save_model()`**: The entire preprocessing + model pipeline is exported as a single `.pkl` file, ready for hot-swapping in the MLE backend.

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


## 5. Deployment Strategy (MLE Phase)
Moving forward, we will deploy only the **Churn Classification Model**.
- **Tech Stack**: FastAPI (Backend) + React (Frontend) + Docker.
- **Pipeline**: Input User Data -> Preprocessing Pipeline (Saved .pkl) -> Prediction (Churn/No Churn) -> Probability Score.

---
*This report demonstrates not just ability to code models, but the critical thinking required to validate them.*
