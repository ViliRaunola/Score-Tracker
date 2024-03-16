FROM node:latest AS builder

WORKDIR /client

COPY ScoreTracker/client .

RUN npm install

# Build React app
RUN npm run build

FROM python:3.8

WORKDIR .

COPY --from=builder /client/build client/build

COPY requirements.txt requirements.txt
RUN apt-get update && apt-get upgrade -y
RUN pip install --upgrade pip
RUN pip3 install -r requirements.txt

COPY ScoreTracker/server server
COPY ScoreTracker/manage.py .
COPY ScoreTracker/views.py .
COPY ScoreTracker/db.sqlite3 .

EXPOSE 8000

CMD ["python3.8", "manage.py", "runserver"]