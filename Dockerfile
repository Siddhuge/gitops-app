FROM python:3.12-slim

WORKDIR /app
COPY . .

RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

RUN mkdir -p reports logs
RUN touch cache.json

CMD ["python", "main.py"]