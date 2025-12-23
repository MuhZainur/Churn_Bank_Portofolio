
FROM python:3.10-slim-bullseye

WORKDIR /app

# Install system dependencies required by PyCaret (gmpy2, cryptography, scipy)
RUN apt-get update && apt-get install -y \
    libgmp-dev \
    gcc \
    g++ \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
