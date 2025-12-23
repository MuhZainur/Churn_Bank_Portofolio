
FROM python:3.10-slim

WORKDIR /app
# FORCE_CACHE_INVALIDATION: 2025-12-23
ENV DEPLOY_REFRESH=true

COPY requirements.txt .
run pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
