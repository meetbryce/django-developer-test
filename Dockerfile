FROM python:2.7
ENV PYTHONBUFFERED 1
RUN mkdir /code
WORKDIR /code
RUN apt-get update && apt-get install -y build-essential
ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD . /code/