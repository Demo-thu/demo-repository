FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1 AI_HOST=0.0.0.0 AI_PORT=8765
WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY textutil.py classifier.py serve.py predict.py ./
COPY static ./static
COPY model ./model

RUN useradd --system --no-create-home ai && chown -R ai /app
USER ai

EXPOSE 8765
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \
  CMD python -c "import urllib.request,os;urllib.request.urlopen('http://127.0.0.1:'+os.environ['AI_PORT']+'/',timeout=3)"

CMD ["python", "serve.py"]
