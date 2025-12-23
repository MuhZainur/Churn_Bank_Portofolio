
FROM python:3.10-slim

WORKDIR /app
# FORCE_CACHE_INVALIDATION: 2025-12-23_REV2
ENV DEPLOY_REFRESH=rev2

COPY requirements.txt .
run pip install --no-cache-dir -r requirements.txt
# SAFETY NET: Force reinstall sklearn to 1.5.2 in case PyCaret upgraded it or base image had it
RUN pip uninstall -y scikit-learn && pip install scikit-learn==1.5.2

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
