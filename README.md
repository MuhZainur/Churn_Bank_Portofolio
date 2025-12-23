
# Lloyd's Banking Group - Customer Churn AI 🚀

An End-to-End Artificial Intelligence solution to predict customer churn risks and optimize retention strategies. Built for the modern enterprise stack, moving from raw banking data to a deployed predictive API.

---

## 🌐 Live Demo (Cloud Run)
*   **Web Dashboard (Frontend):** [Click to Open App 🚀](https://churn-bank-portofolio-frontend-567427950134.asia-southeast2.run.app)
*   **API Docs (Backend):** [Swagger UI 📄](https://churn-bank-portofolio-backend-567427950134.asia-southeast2.run.app/docs)

---

## 🏗️ Architecture Overview

This project simulates a real-world Machine Learning Engineering workflow, divided into three professional phases:

### Phase 1: Data Analytics (DA) 📊
*   **Goal:** Uncover patterns in customer attrition.
*   **Key Insights:** Identified that "High Income" users with "Complaint" interactions have the highest churn risk.
*   **Deliverable:** comprehensive `DA/DA_Portfolio_Report.md`.

### Phase 2: Data Science (DS) 🧠
*   **Goal:** Build a robust predictive model.
*   **Model:** **PyCaret Ensemble** (XGBoost Tuned).
*   **Techniques:** Auto-SMOTE, 10-Fold CV, Random Grid Search.
*   **Deliverable:** `DS/DS_Advanced_Analytics.ipynb` and `lloyds_churn_model.pkl` (Full Pipeline).

### Phase 3: ML Engineering (MLE) ⚙️
*   **Goal:** Deploy the model into a production-grade application.
*   **Backend:** **FastAPI** serving the Scikit-learn Pipeline with robust error handling (Lazy Loading).
*   **Frontend:** **React** (Vite) dashboard for Relationship Managers to check risk scores in real-time.
*   **DevOps:**
    *   **Docker:** Full containerization of the stack.
    *   **Hot-Reloading:** Configured with Volume Mounts for rapid development.

---

## 💻 Tech Stack

| Component | Technologies |
| :--- | :--- |
| **Data Science** | Python 3.10, **PyCaret 3.3**, XGBoost 2.0 |
| **Backend API** | FastAPI, Uvicorn, **PyCaret (Inference)** |
| **Frontend UI** | React.js, Vite, Tailwind CSS |
| **Infrastructure** | Docker, Docker Compose |

---

## 🚀 How to Run (Docker)

The entire application can be launched with a single command using Docker Compose.

### Prerequisites
*   Docker & Docker Compose installed.

### Steps
1.  **Clone the Repository**
    ```bash
    git clone https://github.com/MuhZainur/Churn_Bank_Portofolio.git
    cd Churn_Bank_Portofolio
    ```

2.  **Launch Application**
    ```bash
    cd MLE
    docker-compose up --build
    ```

3.  **Access Services**
    *   **Web Dashboard:** [http://localhost:3000](http://localhost:3000)
    *   **API Docs (Swagger):** [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 📂 Project Structure

```
├── DA/                   # Phase 1: Data Analytics
│   ├── DA_Churn_Analysis.ipynb
│   └── DA_Portfolio_Report.md
├── DS/                   # Phase 2: Data Science Models
│   ├── DS_Advanced_Analytics.ipynb
│   └── DS_Portfolio_Report.md
├── MLE/                  # Phase 3: Deployment
│   ├── Backend/          # FastAPI App
│   ├── Frontend/         # React App
│   ├── docker-compose.yml
│   └── MLE_Portfolio_Report.md
└── README.md             # Project Documentation
```

---

*Created by **MuhZainur** - ML Engineer & Data Scientist*
