#Author: Johannes Wimmer, Lukas Pietzschmann

FROM python:3.9-slim
WORKDIR /app

COPY ./requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY ["./services/Account Service", "." ]

CMD [ "python3", "api.py" ]