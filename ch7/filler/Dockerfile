FROM python:3.9-slim

WORKDIR /app

COPY filler.py .

RUN pip install mysql-connector-python

CMD ["python", "filler.py"]


