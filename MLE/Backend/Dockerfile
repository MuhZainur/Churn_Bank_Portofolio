
# RADICAL SOLUTION: Use different base image variant to bypass cache altogether
FROM python:3.10-slim-bullseye

WORKDIR /app

# Install all dependencies in single layer to minimize cache issues
COPY requirements.txt .
RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt && \
    pip uninstall -y scikit-learn && \
    pip install --no-cache-dir scikit-learn==1.5.2

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
