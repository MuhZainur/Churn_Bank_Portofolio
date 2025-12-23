
# Machine Learning Engineering (MLE) Report
**Project:** Lloyd's Banking Group - AI Churn Prediction System

## 1. System Architecture
We designed a Microservices Architecture to ensure scalability and maintainability.

### A. Backend (FastAPI)
-   **Framework**: FastAPI (High performance, async).
-   **Model Serving**: **PyCaret Pipeline** (Preprocessing + Model + Tuning) loaded entire `.pkl`.
-   **API Design**: RESTful implementation with `Pydantic` validation.
-   **Key Features**:
    -   `POST /predict/churn`: Accepts raw customer data, returns Churn Probability & Risk Level.
    -   **Hot-Reload**: Configured for instant feedback during development.

### B. Frontend (React + Vite)
-   **Framework**: React.js with Vite (Lightning fast build).
-   **UI/UX**: Custom CSS Dashboard with "Glassmorphism" design.
-   **Integration**: Consumes the Backend API via `Axios`, displaying real-time risk assessments.

### C. Containerization (Docker)
-   **Orchestration**: `docker-compose` manages both services.
-   **Optimization**: multi-stage builds to reduce image size.
-   **Volume Mounts**: Configured `./Backend:/app` to enable **Hot-Reloading** of code and models without rebuilding.

---

## 2. Engineering Challenges & Solutions

### Issue 1: "Model Not Loaded" in Docker
**Problem**: The model worked locally but failed in Docker with `Model not loaded`.
**Root Cause**: 
1.  **Dependency Hell**: The Docker container was missing `xgboost` in `requirements.txt`.
2.  **Stale State**: The container was running an older build that didn't have the Volume Mounts configured, so it couldn't see the new `.pkl` file.
3.  **Missing PyCaret**: Backend required `pycaret` library to deserialize the model pipeline.

**Solution**:
-   **Dependency Fix**: Added `pycaret` and `xgboost` to requirements.
-   **Infrastructure Fix**: Updated `docker-compose.yml` with Volume Mounts.
-   **Resolution**: Forced a rebuild (`docker-compose up -d --build`) to sync the environment.

### Issue 2: Feature Mismatch Fear
**Problem**: Concern that manual One-Hot Encoding values weren't matching the model's training schema.
**Verification**: 
-   Implemented `get_model_signature()` in the notebook to inspect the pipeline.
-   Confirmed the Pipeline *contains* the Preprocessor, accepting **RAW** inputs (e.g. "Male") and encoding them automatically.

---

## 3. Deployment Pipeline
A basic **CI/CD Pipeline** was established:
1.  **Linting**: Code quality checks.
2.  **Testing**: `pytest` runs against the API inputs.
3.  **Build**: Docker images built automatically on push.
