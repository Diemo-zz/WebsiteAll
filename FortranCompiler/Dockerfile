FROM ubuntu:20.04
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install gfortran python3 python3-pip -y
COPY requirements.txt .
RUN pip3 install -r requirements.txt
COPY app /app
WORKDIR /app
ENTRYPOINT ["gunicorn"]
CMD ["runfortran:app", "-k", "uvicorn.workers.UvicornWorker", "-b", "0.0.0.0:80"]